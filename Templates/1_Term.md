<%*
const name = (tp.file.title).split(" ")[0] !== "Untitled" ? tp.file.title: await tp.system.prompt("Напишите новое название файла");

await tp.file.move(`Second Brain/Term/${name}`)

let tags = [];


// Ручной ввод тегов
const manualTags = await tp.system.prompt("Добавить свои теги через запятую:");
if (manualTags) {
    tags.push(...manualTags.split(",")
        .map(t => t.trim())
        .map(t => `${t.replace(/^#/, '')}`) 
        .filter(t => t.length > 1));
}


// Уникальные теги без дубликатов
tags = [...new Set(tags)].map(t => t.replace(/^#/, ''))%>---
tags: <% `\n- ${tags.join("\n- ")}`%> 
date: <% tp.date.now("YYYY-MM-DD") %>
time: <% tp.date.now("HH:mm") %>

aliases:
-
type: term
category: 
- secondbrain
source:
-
link: 
- "[[]]"
---
# Определение
-



---
# Связи
**Source**
>`=join(this.source,"<br>")`

**Releated**
>`=join(this.link,"<br>")`

**Terns**

**Questions**


---