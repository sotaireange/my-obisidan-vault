<%*




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
date: <% tp.date.now("YYYY:MM:DD") %>
time: <% tp.date.now("HH:MM") %>
readed: false
---
