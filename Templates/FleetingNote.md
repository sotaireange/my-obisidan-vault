<%*
const noteName = await tp.system.prompt("Напишите названиеи мысли");


await tp.file.move(`Second Brain/Fleeting/${noteName}`)

let tags = ["fleetingNote"];


// Ручной ввод тегов
const manualTags = await tp.system.prompt("Добавить свои теги через запятую:");
if (manualTags) {
    tags.push(...manualTags.split(",")
        .map(t => t.trim())
        .map(t => `${t.replace(/^#/, '')}`) 
        .filter(t => t.length > 1));
}

const formattedLinks = `- "[[]]"`
// Уникальные теги без дубликатов
tags = [...new Set(tags)].map(t => t.replace(/^#/, ''))%>---
date: <% tp.date.now("YYYY-MM-DD") %>
time: <% tp.date.now("HH:mm") %>
tags: <% `\n- ${tags.join("\n- ")}`%>
links: <%`\n${formattedLinks} `%>
category: secondbrain
source: 

---
## ***Заметка:***


