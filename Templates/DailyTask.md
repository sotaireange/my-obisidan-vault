<%*
const name = await tp.system.prompt("Напишите название задания");

await tp.file.rename(name)
await tp.file.move(`Calnder/DailyTasks/${name}`)

const priority =

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
