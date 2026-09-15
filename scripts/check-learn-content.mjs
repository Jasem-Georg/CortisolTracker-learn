/**
 * Lint Learn Markdown before publish. Author does not need SSH:
 * invalid frontmatter fails CI on the PR.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parseFrontmatter } from "./md.mjs";

export const LEARN_LANGS = ["en", "de", "es", "fr", "ru", "uk"];
export const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
export const ISO_DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

const SKIP_NAMES = new Set(["_template.md", "README.md"]);
const SKIP_DIRS = new Set([".github", "scripts", "images", "node_modules"]);

/** Phrases that count as the in-body medical-device disclaimer (draft: false). */
export const DISCLAIMER_NEEDLES = {
  en: ["medical device"],
  de: ["medizinprodukt"],
  es: ["producto sanitario", "dispositivo médico", "dispositivo medico"],
  fr: ["dispositif médical", "dispositif medical"],
  ru: ["медицинским изделием", "медицинское устройство", "медицинским устройством"],
  uk: ["медичним виробом", "медичний пристрій", "медичним пристроєм"],
};

const IMAGE_RE = /!\[[^\]]*]\(([^)]+)\)/g;

export function isIsoDate(value) {
  if (typeof value !== "string" || !ISO_DATE_RE.test(value)) return false;
  const parsed = new Date(`${value}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime())) return false;
  return parsed.toISOString().slice(0, 10) === value;
}

export function hasDisclaimer(lang, body) {
  const hay = String(body || "")
    .normalize("NFC")
    .toLowerCase();
  const needles = DISCLAIMER_NEEDLES[lang] || DISCLAIMER_NEEDLES.en;
  return needles.some((n) => hay.includes(n.toLowerCase()));
}

/**
 * @param {{ relPath: string, raw: string, enTranslates?: Set<string>, imageExists?: (src: string) => boolean }} input
 */
export function validateArticle({ relPath, raw, enTranslates, imageExists }) {
  const errors = [];
  const warnings = [];
  const posix = relPath.replace(/\\/g, "/");
  const parts = posix.split("/");
  if (parts.length !== 2 || !parts[1].endsWith(".md")) {
    errors.push(`${posix}: expected {lang}/{slug}.md`);
    return { errors, warnings };
  }
  const [dirLang, fileName] = parts;
  const fileSlug = fileName.slice(0, -3);

  if (!LEARN_LANGS.includes(dirLang)) {
    errors.push(`${posix}: folder "${dirLang}" is not a UI language (${LEARN_LANGS.join(", ")})`);
    return { errors, warnings };
  }

  let data;
  let body;
  try {
    ({ data, body } = parseFrontmatter(raw));
  } catch (err) {
    errors.push(`${posix}: ${err.message}`);
    return { errors, warnings };
  }

  if (!String(data.title || "").trim()) {
    errors.push(`${posix}: title is required`);
  }
  if (!LEARN_LANGS.includes(data.lang)) {
    errors.push(`${posix}: lang must be one of ${LEARN_LANGS.join(", ")}`);
  } else if (data.lang !== dirLang) {
    errors.push(`${posix}: lang "${data.lang}" does not match folder "${dirLang}"`);
  }
  if (typeof data.slug !== "string" || !SLUG_RE.test(data.slug) || data.slug.length > 80) {
    errors.push(`${posix}: slug must be lowercase kebab-case (a-z, 0-9, hyphen)`);
  } else if (data.slug !== fileSlug) {
    errors.push(`${posix}: slug "${data.slug}" must equal filename "${fileSlug}"`);
  }
  if (!isIsoDate(data.date)) {
    errors.push(`${posix}: date must be ISO YYYY-MM-DD`);
  }
  if (data.updated != null && data.updated !== "" && !isIsoDate(data.updated)) {
    errors.push(`${posix}: updated must be ISO YYYY-MM-DD`);
  }
  if (typeof data.draft !== "boolean") {
    errors.push(`${posix}: draft must be true or false`);
  }
  if (!String(data.translates || "").trim()) {
    errors.push(`${posix}: translates is required (usually the EN slug)`);
  }

  const published = data.draft === false;
  if (published) {
    if (!String(data.description || "").trim()) {
      errors.push(`${posix}: description is required when draft is false`);
    }
    if (!isIsoDate(data.updated)) {
      errors.push(`${posix}: updated is required when draft is false`);
    }
    if (!hasDisclaimer(dirLang, body)) {
      errors.push(
        `${posix}: published body must include a medical-device disclaimer (see README.md)`
      );
    }
  }

  if (data.lang && data.lang !== "en" && data.translates && enTranslates && !enTranslates.has(String(data.translates))) {
    warnings.push(
      `${posix}: no published or draft EN article with translates "${data.translates}"`
    );
  }

  const imgRe = new RegExp(IMAGE_RE.source, "g");
  let match;
  while ((match = imgRe.exec(String(body))) !== null) {
    const src = match[1].trim();
    if (src.startsWith("https://")) continue;
    if (!src.startsWith("/learn/images/") || src.includes("..")) {
      const msg = `${posix}: image must be /learn/images/... or https:// (${src})`;
      if (published) errors.push(msg);
      else warnings.push(msg);
      continue;
    }
    if (typeof imageExists === "function" && !imageExists(src)) {
      const msg = `${posix}: missing image file for ${src}`;
      if (published) errors.push(msg);
      else warnings.push(msg);
    }
  }

  return { errors, warnings };
}

export function collectLearnMarkdown(contentRoot) {
  /** @type {{ relPath: string, absPath: string }[]} */
  const files = [];
  if (!fs.existsSync(contentRoot)) return files;
  for (const name of fs.readdirSync(contentRoot, { withFileTypes: true })) {
    if (name.isFile() && SKIP_NAMES.has(name.name)) continue;
    if (name.isFile() && name.name.endsWith(".md")) {
      files.push({ relPath: name.name, absPath: path.join(contentRoot, name.name) });
      continue;
    }
    if (!name.isDirectory()) continue;
    if (SKIP_DIRS.has(name.name) || name.name.startsWith(".")) continue;
    const langDir = path.join(contentRoot, name.name);
    for (const child of fs.readdirSync(langDir, { withFileTypes: true })) {
      if (!child.isFile() || !child.name.endsWith(".md")) continue;
      if (SKIP_NAMES.has(child.name)) continue;
      files.push({
        relPath: `${name.name}/${child.name}`,
        absPath: path.join(langDir, child.name),
      });
    }
  }
  return files;
}

/**
 * @param {string} contentRoot
 * @param {{ imagesRoot?: string }} [opts]
 */
export function lintLearnContent(contentRoot, opts = {}) {
  const errors = [];
  const warnings = [];
  const imagesRoot = opts.imagesRoot;
  const files = collectLearnMarkdown(contentRoot);

  for (const file of files) {
    const posix = file.relPath.replace(/\\/g, "/");
    if (!posix.includes("/")) {
      errors.push(`${posix}: Markdown belongs in {lang}/{slug}.md (not the learn root)`);
    }
  }

  const enTranslates = new Set();
  for (const file of files) {
    const posix = file.relPath.replace(/\\/g, "/");
    if (!posix.startsWith("en/")) continue;
    try {
      const { data } = parseFrontmatter(fs.readFileSync(file.absPath, "utf8"));
      if (data.translates) enTranslates.add(String(data.translates));
    } catch {
      /* validated below */
    }
  }

  const imageExists = (src) => {
    if (!imagesRoot) return true;
    const name = src.slice("/learn/images/".length);
    if (!name || name.includes("/") || name.includes("..")) return false;
    return fs.existsSync(path.join(imagesRoot, name));
  };

  const seenLangSlug = new Map();
  const seenLangTranslates = new Map();

  for (const file of files) {
    const posix = file.relPath.replace(/\\/g, "/");
    if (!posix.includes("/")) continue;
    const raw = fs.readFileSync(file.absPath, "utf8");
    const result = validateArticle({ relPath: posix, raw, enTranslates, imageExists });
    errors.push(...result.errors);
    warnings.push(...result.warnings);

    try {
      const { data } = parseFrontmatter(raw);
      if (data.lang && data.slug) {
        const key = `${data.lang}/${data.slug}`;
        if (seenLangSlug.has(key)) {
          errors.push(`${posix}: duplicate ${key} (also ${seenLangSlug.get(key)})`);
        } else {
          seenLangSlug.set(key, posix);
        }
      }
      if (data.lang && data.translates) {
        const tKey = `${data.lang}::${data.translates}`;
        if (seenLangTranslates.has(tKey)) {
          errors.push(
            `${posix}: duplicate translates "${data.translates}" for ${data.lang} (also ${seenLangTranslates.get(tKey)})`
          );
        } else {
          seenLangTranslates.set(tKey, posix);
        }
      }
    } catch {
      /* already reported */
    }
  }

  return { errors, warnings };
}

function isDirectRun() {
  const here = fileURLToPath(import.meta.url);
  const argv1 = process.argv[1];
  if (!argv1) return false;
  return path.normalize(here) === path.normalize(path.resolve(argv1));
}

if (isDirectRun()) {
  const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
  const { errors, warnings } = lintLearnContent(repoRoot, {
    imagesRoot: path.join(repoRoot, "images"),
  });
  for (const line of warnings) console.warn(`[check:learn] WARN ${line}`);
  if (errors.length) {
    console.error("[check:learn] Learn content failed:");
    for (const line of errors) console.error(` - ${line}`);
    process.exit(1);
  }
  console.log("[check:learn] Learn Markdown frontmatter is valid.");
}
