<%*
const task_name = await tp.system.prompt("Напишите название задачи");


const allTags = Object.keys(app.metadataCache.getTags())
                    .filter(t => t.length > 1 && t !== "features");

if (allTags.length > 0) {
tag = await tp.system.suggester(allTags, allTags, false, "Выберите один тег (Esc чтобы пропустить)");
}
tag = tag.replace(/^#/, "");


const filename=`task_${tag}_${task_name}`
await tp.file.rename(filename)


let tags = ["task"];

if (tag) { tags.push(tag.startsWith("#") ? tag : `${tag}`);
} 

await tp.file.move(`Project notes/${tag}/${filename}`)

// Ручной ввод тегов
const manualTags = await tp.system.prompt("Добавить свои теги через запятую:");
if (manualTags) {
    tags.push(...manualTags.split(",")
        .map(t => t.trim())
        .map(t => `#${t.replace(/^#/, '')}`) 
        .filter(t => t.length > 1));
}


// Уникальные теги без дубликатов
tags = [...new Set(tags)].map(t => t.replace(/^#/, ''))
%>---
date: <% tp.date.now("YYYY-MM-DD HH:MM") %>
tags: [<% tags.join(" ") %>]
source: <% `"[[${tag}]]"` %>

---
## ⚠️Описание задачи:


## 📝Реализация:


## 🏗Затрагивается:




<%*
const kanbanFileName = `${tag}_tasks.md`; // Формируем имя Kanban-файла
const kanbanFilePath = `Project notes/${tag}/${kanbanFileName}`; // Полный путь

const newTaskLink = `[[${filename}]]`; // Создаем ссылку на текущий файл
const kanbanFile = app.vault.getAbstractFileByPath(kanbanFilePath);

if (kanbanFile) { 
	let content = await app.vault.read(kanbanFile);
	let updatedContent = content.replace(/(## 🟢 Todo\n)/i, `$1- [ ]      ${newTaskLink}\n`);
	await app.vault.modify(kanbanFile, updatedContent);
} else {
	new Notice("Kanban-файл не найден!"); } %>