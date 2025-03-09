<%*
const firstDay = tp.date.weekday("D", 1); // День начала недели (1-31)
const lastDay = tp.date.weekday("D", 7); // День конца недели (1-31)

const firstMonth = tp.date.weekday("MMM", 1); // Название месяца начала недели (Jan, Feb)
const lastMonth = tp.date.weekday("MMM", 7); // Название месяца конца недели

const year = tp.date.weekday("YYYY", 1); // Год
const weekNumber = tp.date.weekday("Wo", 1); // Номер недели

const monthRange = firstMonth === lastMonth ? firstMonth : `${firstMonth}-${lastMonth}`; // Если месяц один, просто Jan, иначе Jan-Feb

const weekPath = `Calendar/Weeks/${weekNumber} Week ${firstDay}-${lastDay} (${monthRange}) ${year}`;

%>---
day: <% moment(tp.file.title, "DD-MM-YYYY dddd").format("dddd") %>
date: <% moment(tp.file.title, "DD-MM-YYYY dddd").format("YYYY-MM-DD") %>

source: <% `"[[${weekPath}|${weekNumber} Week]]"` %>
week: <% weekNumber.replace('th','') %>
tags: days
review: 0
read: 0
video: 0
leetcode: 0
article: 0
programming: 0
completed: false
---
```dataview
TABLE WITHOUT ID 
 review as total, read AS Book, video AS watch  ,article as article,leetcode as LT , programming as IT
WHERE file.name = this.file.name
```
## План

### Учебные задания:
```dataviewjs
const tasks = dv.pages("#everydaytask")
    .map(t => {
        const link = t.file.link;
        const info = t.info;
        const forEach = t.forEach;
        const points = t.points;
		const type = t.type;

        return [
            link, 
            info, 
            forEach, 
            points,
            `\`\`\`meta-bind-button
label: "Finish"
hidden: false
id: "complete_in_table"
style: default
actions:
- type: updateMetadata
  bindTarget: "${type}"
  evaluate: true
  value: "x+1"
- type: updateMetadata
  bindTarget: "review"
  evaluate: true
  value: "x+1"
\`\`\``
        ];
    });

dv.table(["Name","INFO","ForEach", "Points",""], tasks);
```
### Прочее
```dataviewjs
const tasks = dv.pages("#tasks")
    .sort(t => t.priority, 'desc')
    .filter(t => !t.completed)
    .map(t => {
        const link = t.file.link;
        const created = t.date;
        const tags = t.tags;
        const priority = t.priority;
        const points = t.points
        const reviewValue = `x+${points}`;
		const currentFileName = dv.current().file.name;
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
- type: updateMetadata
  bindTarget: "review"
  evaluate: true
  value: "${reviewValue}"
- type: updateMetadata
  bindTarget: "${t.file.name}#daycompleted"
  evaluate: false
  value: "[[${currentFileName}]]"
\`\`\``
        ];
    });

dv.table(["Name", "Created", "Tags", "Priority", "Points",""], tasks);
```

## ## Обзор

### Было сделано:
```dataview
Table date,
tags,priority,points
FROM #tasks
WHERE completed_at=this.date
```


### Что было хорошо:
 - 



### Что можно улучшить:
