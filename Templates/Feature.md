<%*
const feature_name = await tp.system.prompt("Напишите названиеи фичи");


await tp.file.rename(filename)
await tp.file.move('Features/${filename}.md')

let tags = [];

const allTags = Object.keys(app.metadataCache.getTags())
                    .filter(t => t.length > 1 && t !== "features");

let selected = [];

// Ручной ввод тегов
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
date: <% tp.date.now("YYYY-MM-DD") %>
category: feature
time: <% tp.date.now("HH:mm") %>
tags: <% `\n- ${tags.join("\n- ")}`%>
links: <%`\n${formattedLinks} `%>
source: 


---


## ⚠️Описание фичи:



## 📝Реализация:


## 🏗Затрагивается:

