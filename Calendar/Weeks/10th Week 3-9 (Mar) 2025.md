---
week: 10
status: false
review: 0
dayreview: 0
date: 2025-03-07
---
```dataviewjs
const tasks = dv.current().file.tasks.filter(t => t.completed);

let score = 0;

tasks.forEach(t => {
  const match = t.text.match(/\[(\d+)\]/); // Ищем число в квадратных скобках
  if (match) score += parseInt(match[1]); // Добавляем к общему счёту
});

dv.paragraph(`Количество баллов недели: **${score}**`);
```

```dataviewjs
let pages = dv.pages('"путь_к_заметкам"') 
	.where(p => p.file.week == dv.current().file.week);
let totalPoints = pages 
	.flatMap(p => p.tasks)
	.reduce((sum, t) => sum + (t.point || 0), 0);
	
dv.paragraph("Общий балл за неделю: " + totalPoints);
```

## Дни
```dataview
TABLE day, date, review, choice(completed = true, "✅", "🔄") AS Status
FROM "Calendar/Days" 
WHERE this.file.week = file.week
```

## Цели недели

### Общий:
- [ ] Прочитать >25%(~1часть)(3балла) [0]
- [ ] Посмотреть видео(1 час ) [0]
- [ ] [0]
- [ ] [0]
- [ ] [0]
### Особенные задания:
- [ ] [0]
- [ ] [0]




## Обзор

### Что было хорошо:
 - 



### Что можно улучшить:
- 


## Все созданные файлы
```dataview
TABLE tags[0] AS "TAGS" ,
split(file.folder,"/")[0] as Folders,
choice(contains(date," "), date(replace(string(date)," ", "T")+":00.000"), date) as date
FROM ""
WHERE (
choice(contains(this.date," "), date(replace(string(date)," ", "T")+":00.000"), date(date))
).weekyear = this.week and !(week=this.week)
sort date asc
```
