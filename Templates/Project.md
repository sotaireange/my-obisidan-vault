<%*

const name = (tp.file.title).split(" ")[0] !== "Untitled" ? tp.file.title: await tp.system.prompt("Напишите новое название проекта");


const projectFolder=`Project notes/${name}`
const projectFile=`${projectFolder}/${name}`
await tp.file.move(projectFile);


const projectFile = tp.file.folder();
let tags = [projectFile];

// Ручной ввод тегов
const manualTags = await tp.system.prompt("Добавить свои теги через запятую:");
if (manualTags) {
    tags.push(...manualTags.split(",")
        .map(t => t.trim())
        .map(t => `${t.replace(/^#/, '')}`) 
        .filter(t => t.length > 1));
}

tags = [...new Set(tags)].map(t => t.replace(/^#/, ''));;
const logicCanvas = `${projectFolder}/${projectFile}_blocks.canvas`;
%>---
tags: <% `\n- ${tags.join("\n- ")}`%>
date: <% tp.date.now("YYYY-MM-DD") %>
time: <% tp.date.now("HH:mm") %>
aliases: 
-
type: project
category: 
- main
source: 
- "[[]]"
link: 
- "[[]]"
---

# 📌 Проект: <% projectFile %>

## 📝 Задачи и логика
- [[<% logic %>|Canvas: Блоки программы]]

## 🔍 Описание
Краткое описание проекта: что он делает и для чего предназначен.

## 🛠️ Технологии
- Python: (указать используемые библиотеки и фреймворки)
- БД: (если есть, указать PostgreSQL, Redis и т.д.)
- API: (если проект взаимодействует с API, указать какие)
- Другое: (например, Docker, Kubernetes и т.д.)

## 🎯 Функциональность
- [ ] Основные функции проекта
- [ ] Что реализовано
- [ ] Что в планах


## 📂 Структура проекта
```plaintext
/путь/к/проекту
├── main.py
├── config.py
├── modules/
│   ├── module1.py
│   ├── module2.py
├── requirements.txt
└── README.md
