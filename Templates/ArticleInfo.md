<%*
const name = await tp.system.prompt("Напишите название статьи");
await tp.file.rename(name)
await tp.file.move(`Article/src/${name}`)



let tags = ["article"];

const manualTags = await tp.system.prompt("Добавить свои теги через запятую:");
if (manualTags) {
    tags.push(...manualTags.split(",")
        .map(t => t.trim())
        .map(t => `#${t.replace(/^#/, '')}`) 
        .filter(t => t.length > 1));
}
%>---
tags: <% `\n- ${tags.join("\n- ")}`%>
link: <% await tp.prompt("Ссылка на статью") %>
date: <% await tp.date.now("YYYY:MM:DD") %>
time: <% await tp.date.now("HH:mm") %>
language: <% await tp.system.suggester(item => item, ["rus", "eng"],false,"rus") %>
review: 0
readed: false
---
