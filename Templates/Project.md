<%*
const PROJECT_FOLDER= "Project notes/"
const name = (tp.file.title).split(" ")[0] !== "Untitled" ? tp.file.title: await tp.system.prompt("Напишите новое название проекта");


const projectFile=`${PROJECT_FOLDER}/${name}/${name}.md`
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

tags = [...new Set(tags)].map(t => t.replace(/^#/, ''));
const projectFolder = tp.file.folder(true);
const tasksKanban = `${projectFolder}/${projectFile}_tasks.md`; 
const logicCanvas = `${projectFolder}/${projectFile}_logic.canvas`;
const logic= `${projectFile}_logic.canvas`;%>---
date: <% tp.date.now("YYYY-MM-DD") %>
tags: <% `\n- ${tags.join("\n- ")}`%>
---

# 📌 Проект: <% projectFile %>

## 📝 Задачи и логика
- [[<% tasksKanban %>|Список Задач(Kanban)]]
- [[<% logic %>|Canvas: Логика программы]]



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
