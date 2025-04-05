<%*
const TARGET_FOLDER = "Project notes";
const parent = app.vault.getAbstractFileByPath(TARGET_FOLDER);
const folders = (parent?.children || [])
    .filter(f => "children" in f) // только папки
    .map(f => f.path);

const selected = await tp.system.suggester(folders, folders);
const selectedFolderName = selected.split("/").pop();
const expectedFilePath = `${selected}/${selectedFolderName}`;

const selectedFolder = app.vault.getAbstractFileByPath(selected);

// Фильтруем только md-файлы внутри выбранной папки (не вложенные)
const files = (selectedFolder?.children || [])
    .filter(f => f.extension === "md")
    .map(f => f.path);

let block
if (files.length === 0) {
} else {
    block = await tp.system.suggester(files,files)
    }


const name = (tp.file.title).split(" ")[0] !== "Untitled" ? tp.file.title: await tp.system.prompt("Напишите новое название файла");


await tp.file.move(`${selected}/${name}_${selectedFolderName}`)

const logic=`${selected}/Block_${selectedFolderName}.canvas`


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
- task
source: <% `"[[${expectedFilePath}]]"` %>
link: 
- <% `"[[${logic}]]"` %>
- <% `"[[${block}]]"` %>
---
Блок:


**Описание**
- 

**Вывод**
- 


**Нужно сделать**
-

**Мысли**
-




# Связи

**Source**
>`=join(this.source,"<br>")`

**Reference**
>`=join(this.link,"<br>")`
