<%*
const name = await tp.system.prompt("Напишите название задания");

await tp.file.rename(name)
await tp.file.move(`Calnder/DailyTasks/${name}`)

const priority = await tp.system.suggester(item => item, [4,3,2,1],false,4)
const points = await tp.system.suggester(item => item, [1,2,3,4,5],false,1)

%>
---
date: <% tp.date.now("YYYY-MM-DD") %>
time: <% tp.date.now("HH:mm") %>
completed: false
type: DailyTask
poins:
priority:
source: 
---
