<%*
const TARGET_FOLDER = "Project notes";

// Получаем саму папку
const parent = app.vault.getAbstractFileByPath(TARGET_FOLDER);

// Проверка на существование и наличие дочерних элементов
const folders = (parent?.children || [])
    .filter(f => "children" in f) // только папки
    .map(f => f.path);

// Выбор из списка
const selected = await tp.system.suggester(folders, folders);

const selectedFolderName = selected.split("/").pop();

// Ожидаем, что в этой папке есть файл с именем [selectedFolderName].md
const expectedFilePath = `${selected}/${selectedFolderName}`;


const name = (tp.file.title).split(" ")[0] !== "Untitled" ? tp.file.title: await tp.system.prompt("Напишите новое название файла");

await tp.file.move(`${selected}/${name}_${selectedFolderName}`)

let tags = [];
const manualTags = await tp.system.prompt("Добавить свои теги через запятую:");
if (manualTags) {
    tags.push(...manualTags.split(",")
        .map(t => t.trim())
        .map(t => `${t.replace(/^#/, '')}`) 
        .filter(t => t.length > 1));
}
%>---
tags: <% `\n- ${tags.join("\n- ")}`%>
date: <% await tp.date.now("YYYY-MM-DD") %>
time: <% await tp.date.now("HH:mm") %>
aliases: 
-
type: project
category:
- block
source: <% `"[[${expectedFilePath}]]"` %>
link: 
- <% `"[[${}]]"` %>
---


## 🔍 Описание
Краткое описание проекта: что он делает и для чего предназначен.



## 🎯 Функциональность
-


## 🎯 Требования
- [ ] Основные функции проекта
- [ ] Что реализовано
- [ ] Что в планах