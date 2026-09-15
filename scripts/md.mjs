/**
 * Minimal Markdown → HTML for Learn articles. No raw HTML passthrough.
 */

export function parseFrontmatter(raw) {
  const text = String(raw).replace(/^\uFEFF/, "");
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) {
    throw new Error("Markdown file must start with YAML frontmatter (---)");
  }
  return { data: parseSimpleYaml(match[1]), body: match[2].replace(/^\r?\n/, "") };
}

export function markdownToHtml(body) {
  const blocks = String(body)
    .replace(/\r\n/g, "\n")
    .trim()
    .split(/\n{2,}/);
  return blocks.map(renderBlock).filter(Boolean).join("\n");
}

export function esc(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function parseSimpleYaml(text) {
  const data = {};
  let listKey = null;
  for (const rawLine of text.split(/\r?\n/)) {
    if (!rawLine.trim() || rawLine.trim().startsWith("#")) {
      listKey = null;
      continue;
    }
    const listItem = rawLine.match(/^\s+-\s+(.*)$/);
    if (listItem && listKey) {
      if (!Array.isArray(data[listKey])) data[listKey] = [];
      data[listKey].push(coerce(unquote(listItem[1])));
      continue;
    }
    const pair = rawLine.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!pair) continue;
    const key = pair[1];
    const rest = pair[2];
    if (rest === "") {
      data[key] = [];
      listKey = key;
      continue;
    }
    listKey = null;
    data[key] = coerce(unquote(rest));
  }
  return data;
}

function unquote(value) {
  const trimmed = String(value).trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

function coerce(value) {
  if (value === "true") return true;
  if (value === "false") return false;
  return value;
}

function renderBlock(block) {
  const lines = block.split("\n").map((line) => line.trimEnd());
  if (lines.every((line) => /^[-*]\s+/.test(line))) {
    const items = lines
      .map((line) => `        <li>${inline(line.replace(/^[-*]\s+/, ""))}</li>`)
      .join("\n");
    return `      <ul>\n${items}\n      </ul>`;
  }
  const joined = lines.join(" ").trim();
  if (!joined) return "";
  if (joined.startsWith("### ")) return `      <h3>${inline(joined.slice(4))}</h3>`;
  if (joined.startsWith("## ")) return `      <h2>${inline(joined.slice(3))}</h2>`;
  if (joined.startsWith("# ")) return `      <h2>${inline(joined.slice(2))}</h2>`;
  return `      <p>${inline(joined)}</p>`;
}

function inline(text) {
  const slots = [];
  const hold = (html) => {
    const i = slots.length;
    slots.push(html);
    return `\u0000${i}\u0000`;
  };
  let s = String(text);
  s = s.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_, alt, src) => {
    const safe = src.trim();
    if (!safe.startsWith("/learn/images/") || safe.includes("..")) return hold(esc(alt));
    return hold(`<img src="${esc(safe)}" alt="${esc(alt)}" />`);
  });
  s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, href) => {
    const h = href.trim();
    if (!isSafeHref(h)) return hold(esc(label));
    const extra = /^https?:\/\//i.test(h)
      ? ' rel="noopener noreferrer" target="_blank"'
      : "";
    return hold(`<a href="${esc(h)}"${extra}>${esc(label)}</a>`);
  });
  s = esc(s);
  s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  s = s.replace(/\u0000(\d+)\u0000/g, (_, i) => slots[Number(i)]);
  return s;
}

function isSafeHref(href) {
  if (!href || /[\s<>\\]/.test(href) || href.startsWith("//")) return false;
  return /^(https?:\/\/|mailto:|\/|#)/i.test(href);
}
