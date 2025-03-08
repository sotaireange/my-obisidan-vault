<%*
const name = await tp.system.prompt("Напишите название задания");

await tp.file.rename(name)
await tp.file.move(`Calnder/DailyTasks/${name}`)

const priority = await tp.system.suggester(item => item, [4,3,2,1],false,"Приоритет задачи, 4- низкий, 1 высокий")
const points = await tp.system.suggester(item => item, [1,2,3,4,5],false,"Баллы за задачу")

%>---
date: <% tp.date.now("YYYY-MM-DD") %>
time: <% tp.date.now("HH:mm") %>
completed: To do
completed_at: 
type: DailyTask
poins: <% points %>
priority: <% priority %>
source: 
---
Hello World!
Hello World!
```meta-bind-button
style: primary
label: Complete
action:
  type: insertIntoNote
  line: 20
  value: "Hello World!"
  templater: false
```

## ⚠️Описание задачи:



## 📝Что нужно сделать:
