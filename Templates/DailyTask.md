<%*
const name = (tp.file.title).split(" ")[0] !== "Untitled" ? tp.file.title: await tp.system.prompt("Напишите новое название файла");
await tp.file.rename(name)
await tp.file.move(`Calendar/Tasks/${name}`)

const priority = await tp.system.suggester(item => item, [4,3,2,1],false,"Приоритет задачи, 4- низкий, 1 высокий")
const points = await tp.system.suggester(item => item, [1,2,3,4,5],false,"Баллы за задачу")
let tags = ["dailytask"];

const manualTags = await tp.system.prompt("Добавить свои теги через запятую:");
if (manualTags) {
    tags.push(...manualTags.split(",")
        .map(t => t.trim())
        .map(t => `${t.replace(/^#/, '')}`) 
        .filter(t => t.length > 1));
}
%>---
tags: <% `\n- ${tags.join("\n- ")}`%>
date: <% await tp.date.now("YYYY-MM-DD") %>
time: <% await tp.date.now("HH:mm") %>
link: 
-
aliases: 
-
type: DailyTask
category: 
- 
source:
completed: false
completed_at: 
completed_day: 
points: <% points %>
priority: <% priority %>
---
# Задача
## ⚠️Описание:



## 📝Что нужно сделать:


## Зачем это нужно:
-

## Как это сделать: 
-


# # Связи

**Source**
>`=this.source`

**References**
>`=join(this.links,"<br>")`