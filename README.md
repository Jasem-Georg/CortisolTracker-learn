# CortisolTracker Learn

Публичные статьи для [cortisoltracker.org/learn](https://cortisoltracker.org/learn/en/).  
Код приложения сюда не входит. Git, сервер и SSH **не нужны**.

Черновики (`draft: true`) не попадают на сайт, но **видны в этом репозитории** — не клади сюда то, чего нельзя показывать.

---

## Новая статья (браузер)

1. Открой папку языка:

   - [en](https://github.com/Jasem-Georg/CortisolTracker-learn/tree/main/en) · [ru](https://github.com/Jasem-Georg/CortisolTracker-learn/tree/main/ru) · [uk](https://github.com/Jasem-Georg/CortisolTracker-learn/tree/main/uk) · [de](https://github.com/Jasem-Georg/CortisolTracker-learn/tree/main/de) · [es](https://github.com/Jasem-Georg/CortisolTracker-learn/tree/main/es) · [fr](https://github.com/Jasem-Georg/CortisolTracker-learn/tree/main/fr)

2. **Add file** → **Create new file**.
3. Имя только латиница и дефисы, например `food-and-cortisol.md`.
4. Скопируй [_template.md](./_template.md), заполни поля.  
   `lang` = папка, `slug` = имя файла без `.md`, пока пишешь — `draft: true`.
5. Абзац «не медицинское изделие» из шаблона не удаляй.
6. Внизу: **Create a new branch for this commit and start a pull request** — не `main`.
7. **Create pull request**. Жди зелёную галочку и апрув владельца.

На сайт статья попадёт после merge и синхронизации с приложением. URL:

`https://cortisoltracker.org/learn/{язык}/{slug}/`

## Картинка

**Add file** → **Upload files** в [images/](./images). В тексте:

```md
![Коротко что на фото](/learn/images/имя-файла.webp)
```

Путь именно `/learn/images/…` — так файл окажется на сайте.

## Правка

Карандаш на файле → снова ветка + pull request, обнови `updated`.

Снять с сайта: `draft: true` (тоже через PR).

## Если проверка красная

| Сообщение | Что сделать |
|-----------|-------------|
| slug must equal filename | имя файла = поле `slug` |
| lang does not match folder | `lang: ru` только в папке `ru/` |
| description is required | при `draft: false` заполни description |
| medical-device disclaimer | верни абзац из шаблона |
| missing image file | имя в статье = имя файла в `images/` |

© CortisolTracker. Тексты не являются медицинской рекомендацией.
