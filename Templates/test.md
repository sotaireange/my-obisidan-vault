<%*
const name = await tp.system.prompt("Напишите название задания");

await tp.file.rename(name)
await tp.file.move(`Calnder/DailyTasks/${name}`)

const priority = await tp.system.suggester(item => item, [4,3,2,1],false,"Приоритет задачи, 4- низкий, 1 высокий")
const points = await tp.system.suggester(item => item, [1,2,3,4,5],false,"Баллы за задачу")
const {autoprop} = this.app.plugins.plugins["metaedit"].api
%>---
date: <% tp.date.now("YYYY-MM-DD") %>
time: <% tp.date.now("HH:mm") %>
completed: To do
completed_at: 
Status:: <% await autoprop("Status") %>
Priority:: <% await autoprop("Priority") %>
type: DailyTask
poins: <% points %>
priority: <% priority %>
source: 
---

## ⚠️Описание задачи:



## 📝Что нужно сделать:
