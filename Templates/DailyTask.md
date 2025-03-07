<%*
const name = await tp.system.prompt("Напишите новое название файла");

await tp.file.rename(name)
await tp.file.move(`Calnder/DailyTasks/${name}`)


%>
---
date: <% tp.date.now("YYYY-MM-DD") %>
time: <% tp.date.now("HH:mm") %>
completed: false
type: DailyTask
source: 
---
