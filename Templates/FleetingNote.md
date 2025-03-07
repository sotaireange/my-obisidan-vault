<%*
const note_name = await tp.system.prompt("Напишите названиеи мысли");

await tp.file.rename(noteName)


let tags = ["fleetingNote"];


// Ручной ввод тегов
const manualTags = await tp.system.prompt("Добавить свои теги через запятую:");
if (manualTags) {
    tags.push(...manualTags.split(",")
        .map(t => t.trim())
        .map(t => `#${t.replace(/^#/, '')}`) 
        .filter(t => t.length > 1));
}

const manualLinks = await tp.system.prompt("Добавить свои линки через запятую:"); const formattedLinks = manualLinks .split(",")
.map(l => `- "[[${l.trim()}]]"`)
.join("\n");
// Уникальные теги без дубликатов
tags = [...new Set(tags)].map(t => t.replace(/^#/, ''))%>---
date: <% tp.date.now("YYYY-MM-DD HH:MM") %>
tags: [<% tags.join(" ") %>]
links: <%`\n${formattedLinks} `%>
source: 

---
## ***Заметка:***


