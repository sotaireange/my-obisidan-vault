<%*
const name = await tp.system.prompt("Напишите название задания");

await tp.file.rename(name)
await tp.file.move(`Calendar/DailyTasks/${name}`)

const priority = await tp.system.suggester(item => item, [4,3,2,1],false,"Приоритет задачи, 4- низкий, 1 высокий")
const points = await tp.system.suggester(item => item, [1,2,3,4,5],false,"Баллы за задачу")

%>---
date: <% tp.date.now("YYYY-MM-DD") %>
time: <% tp.date.now("HH:mm") %>
completed: false
completed_at: 
type: DailyTask
points: <% points %>
priority: <% priority %>
source: 
---

```dataviewjs
const tasks = dv.pages("#tasks")
    .sort(t => t.priority, 'desc')
    .map(t => {
        const link = t.file.link;
        const created = t.date;
        const tags = t.tags;
        const priority = t.priority;
        const points = t.points

        return [
            link, 
            created, 
            tags, 
            priority,
            points, 
            `\`\`\`meta-bind-button
label: "Finish"
hidden: false
id: "complete_in_table"
style: default
actions:
- type: updateMetadata
  bindTarget: "${t.file.name}#completed"
  evaluate: true
  value: "true"
- type: updateMetadata
  bindTarget: "${t.file.name}#completed_at"
  evaluate: true
  value: "'${moment().format('YYYY-MM-DD')}'"
\`\`\``
        ];
    });

dv.table(["Name", "Created", "Tags", "Priority", "Points",""], tasks);
```

## ⚠️Описани*е* задачи:



## 📝Что нужно сделать:
