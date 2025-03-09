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
programming: 1
completed: false
---
```dataviewjs
const tasks = dv.current().file.tasks.filter(t => t.completed);

let score = 0;

tasks.forEach(t => {
  const match = t.text.match(/\[(\d+)\]/); // Ищем число в квадратных скобках
  if (match) score += parseInt(match[1]); // Добавляем к общему счёту
});

dv.paragraph(`Общее количество баллов: **${score}**`);

```
## План

### Учебные задания:
- [ ] Прочитать книгу(10 стр. 1 балл~1час=1балл) [0]
- [ ] Посмотреть видео + конспект(1 час = 1 балла) [0]
- [ ] Разобрать научную статью(1статья=1 балл)[0]
- [ ] Разобрать LeetCode(1тема+2 задачи=1балл)[0]
- [ ] [0]
### Прочее
- [ ] Разрабатывать проект(1час=1балл)[0]
- [ ] [0]

## Список задач
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
