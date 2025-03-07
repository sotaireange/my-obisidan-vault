<%*
const name = await tp.system.prompt("Напишите новое название статьи");
await tp.file.rename(name)




let tags = ["article"];

const manualTags = await tp.system.prompt("Добавить свои теги через запятую:");
if (manualTags) {
    tags.push(...manualTags.split(",")
        .map(t => t.trim())
        .map(t => `#${t.replace(/^#/, '')}`) 
        .filter(t => t.length > 1));
}
%>---
link: 
tags:
date: <% await tp.date.now("YYYY:MM:DD") %>
time: <% await tp.date.now("HH:MM") %>
language: <% await tp.system.suggester(item => item, ["Happy", "Sad", "Confused"],false,"Happy")
%>
readed: false
---
