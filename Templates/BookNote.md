<%* const BOOKS_FOLDER = "Books/books/src";
const name = (tp.file.title).split(" ")[0] !== "Untitled" ? tp.file.title: await tp.system.prompt("Напишите новое название файла");


const bookFiles = app.vault.getFiles().filter(file => 
    file.path.startsWith(BOOKS_FOLDER) && 
    file.extension === "pdf"
);

// Выбор книги
let selectedBook;
if (bookFiles.length > 0) {
    selectedBook = await tp.system.suggester(
        file => file.basename,
        bookFiles
    );
}

let bookTitle = selectedBook 
    ? selectedBook.basename 
    : await tp.system.prompt("Введите название книги (файл не выбран)");

const page = await tp.system.prompt("Укажите страницу");
let pageBook = "";

if (page) {
    const book = selectedBook 
        ? `${selectedBook.basename}.pdf` 
        : "";
        
    pageBook = selectedBook 
        ? `[[${selectedBook.basename}.pdf\#page=${page}|${selectedBook.basename} Page №${page}]]` 
        : `(стр. ${page})`;
}


await tp.file.move(`Books/${selectedBook.basename}/${name}`);

// Генерация тега книги
const autoTag = selectedBook 
    ? selectedBook.basename
        .replace(/[^a-zA-Zа-яА-Я0-9]/g, "_")
        .toLowerCase()
    : "unknown_book";

// Базовые теги
let tags = [];

// Выбор доп. тегов
/*
const allTags = Object.keys(app.metadataCache.getTags())
                    .filter(t => t.length > 1 && t !== "#booknote");

let selected = [];
if (allTags.length > 0) {
    const selection = await tp.system.suggester(
        t => t, 
        allTags, 
        true, 
        "Выберите теги (Esc чтобы пропустить)"
    );
    
    // Обработка результатов выбора
    if (selection) {
        selected = Array.isArray(selection) ? selection : [selection];
    }
}

// Добавление выбранных тегов
if (selected.length > 0) {
    tags.push(...selected.map(t => t.startsWith("#") ? t : `#${t}`)
                      .filter(t => t.length > 1));
}
*/




const manualTags = await tp.system.prompt("Добавить свои теги через запятую:");
if (manualTags) {
    tags.push(...manualTags.split(",")
        .map(t => t.trim())
        .map(t => `${t.replace(/^#/, '')}`) 
        .filter(t => t.length > 1));
}
const manualLinks = await tp.system.prompt("Добавить свои линки через запятую:"); const formattedLinks = manualLinks .split(",")
.map(l => `- "[[${l.trim()}]]"`)
.join("\n");

// Уникальные теги без дубликатов
tags = [...new Set(tags)].map(t => t.replace(/^#/, ''))%>---
tags: <% `\n- ${tags.join("\n- ")}`%>
date: <% await tp.date.now("YYYY-MM-DD") %>
time: <% await tp.date.now("HH:mm") %>
aliases: 
-
type: notice
category:
-
source: <% `"[[${selectedBook.basename}.pdf]]"` %>
link: <%`\n${formattedLinks} `%>
---
**📝Страница:** <% pageBook %>  
# Заметка
## 🔥 Основные идеи 
-

## 🔍Мысли  
-


# Связи
**Source**
>`=join(this.source,"<br>")`

**Releated**
>`=join(this.link,"<br>")`

---

**Questions**
-

**Terms**
-



---