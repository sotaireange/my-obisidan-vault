<%*
const name = (tp.file.title).split(" ")[0] !== "Untitled" ? tp.file.title: await tp.system.prompt("Напишите новое название файла");

await tp.file.move(`Second Brain/Fleeting/${name}`)

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
date: <% tp.date.now("YYYY-MM-DD") %>
time: <% tp.date.now("HH:mm") %>
tags: <% `\n- ${tags.join("\n- ")}`%>
links: 
-
aliases: 
-
type: note
category: 
- secondbrain
source: 
---
# {{Title}}

**Описание**
<!-- Main content in body of my note  -->
- 

**Вывод**
<!-- Supporting content in tail of my note  -->


**Нужно сделать**
- 


# ссылки

**Source**
>`=this.source`

**References**
>`=join(this.links,"<br>")`

**Target**
<!-- Link to project note or externaly published content. -->
- used_in::

---

**Questions**

