# CortisolTracker Learn

Статьи для [cortisoltracker.org/learn](https://cortisoltracker.org/learn/en/).  
Код приложения сюда не входит. Git, сервер и SSH автору **не нужны**.

Это **не** мгновенная публикация: сначала PR и зелёная проверка, потом владелец одной кнопкой выкладывает на сайт. Черновики (`draft: true`) на сайте не видны, но **видны в этом репозитории**.

---

## Новая статья (только браузер)

1. Открой **одну** папку языка — ту, на которой пишешь. Не создавай пустые файлы в `de/` / `en/` «заодно»: любой `.md` в папке языка робот проверяет как статью.

   [en](https://github.com/Jasem-Georg/CortisolTracker-learn/tree/main/en) · [ru](https://github.com/Jasem-Georg/CortisolTracker-learn/tree/main/ru) · [uk](https://github.com/Jasem-Georg/CortisolTracker-learn/tree/main/uk) · [de](https://github.com/Jasem-Georg/CortisolTracker-learn/tree/main/de) · [es](https://github.com/Jasem-Georg/CortisolTracker-learn/tree/main/es) · [fr](https://github.com/Jasem-Georg/CortisolTracker-learn/tree/main/fr)

2. **Add file** → **Create new file**.
3. Имя файла: только латиница, цифры и дефис, например `food-and-cortisol.md`. Не `еда.md`.
4. Скопируй [_template.md](./_template.md) целиком. Заполни поля:
   - `lang` = эта папка (`ru` в `ru/`)
   - `slug` = имя файла без `.md`
   - `draft: true` пока текст не вычитан
   - абзац «не медицинское изделие» из шаблона **не удаляй**
5. Внизу страницы выбери **Create a new branch for this commit and start a pull request**.  
   Не оставляй **Commit directly to the main branch** — в `main` так не пустят, либо сломаешь защиту.
6. **Create pull request**. Дождись зелёной галочки **Learn Markdown** на вкладке Checks.

Пока `draft: true`, на cortisoltracker.org статьи нет. Когда готово к публикации: в **том же** PR поставь `draft: false` (и сегодняшнюю `updated`), снова дождись зелёной проверки. Merge делает владелец: сам себе апрув автор поставить не может.

Готовый URL после выпуска владельцем:

`https://cortisoltracker.org/learn/{язык}/{slug}/`

---

## Картинка

1. Сначала залей файл: папка [images/](./images) → **Add file** → **Upload files**. Лучше в **ту же ветку**, что и статья (сверху слева переключи ветку, потом upload).
2. В Markdown пиши **ровно так** (первый слэш обязателен, слово `images` один раз):

```md
![Коротко что на фото](/learn/images/имя-файла.jpg)
```

Файл на диске: `images/имя-файла.jpg`.  
В тексте: `/learn/images/имя-файла.jpg`.

Не используй `images/файл.jpg` и не используй `/learn/images/images/файл.jpg` — проверка при `draft: false` упадёт («missing image file»).

---

## Если GitHub не даёт закоммитить

Сообщение *Someone has committed since you started editing*: вкладка устарела (кто-то, в том числе робот, уже запушил в эту ветку). Жми **Cancel**, закрой редактор, обнови страницу, открой файл карандашом заново. Не пытайся сохранить старое окно.

---

## Если проверка красная

Править в **том же** PR, не плодить новые ветки без нужды.

| Сообщение робота | Что сделать |
|------------------|-------------|
| must start with YAML frontmatter | удали пустой `.md` или вставь шаблон с `---` в начале |
| slug must equal filename | имя файла = поле `slug` |
| lang does not match folder | `lang: ru` только внутри `ru/` |
| description is required | при `draft: false` заполни `description` |
| medical-device disclaimer | верни абзац из шаблона |
| missing image file | путь `/learn/images/…` и файл реально лежит в `images/` |
| no EN article with translates | это **предупреждение**, не ошибка; нет английской пары — селектора EN не будет |

Жёлтое *Node.js 20 is deprecated* на Actions владельца к тексту статьи отношения не имеет.

---

## Правка уже смерженной статьи

Карандаш → снова **ветка + pull request** (не `main`), обнови `updated`.  
Снять с сайта: `draft: true` в новом PR.

© CortisolTracker. Тексты не являются медицинской рекомендацией.
