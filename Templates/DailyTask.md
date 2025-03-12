<%*
const name = await tp.system.prompt("Напишите название задания");

await tp.file.rename(name)
await tp.file.move(`Calendar/Tasks/${name}`)

const priority = await tp.system.suggester(item => item, [4,3,2,1],false,"Приоритет задачи, 4- низкий, 1 высокий")
const points = await tp.system.suggester(item => item, [1,2,3,4,5],false,"Баллы за задачу")

%>---
tags: <% `\n- ${tags.join("\n- ")}`%>
date: <% await tp.date.now("YYYY-MM-DD") %>
time: <% await tp.date.now("HH:mm") %>
links: 
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
# <% name %>
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