---
week: 10
status: false
date: 2025-03-07
review: 0
---

```dataview
TABLE day, date, review, choice(completed = true, "✅", "🔄") AS Status
FROM "Calendar/Days" 
WHERE this.file.week = file.week
```


```dataviewjs
const tasks = dv.current().file.tasks.filter(t => t.completed);

let score = 0;

tasks.forEach(t => {
  const match = t.text.match(/\[(\d+)\]/); // Ищем число в квадратных скобках
  if (match) score += parseInt(match[1]); // Добавляем к общему счёту
});

dv.paragraph(`Общее количество баллов: **${score}**`);

```

## Цели недели

### Типичные задания:
- [ ] Прочитать книгу(10 стр. 1 балл)  /10=0 баллов [0]
- [ ] Посмотреть видео(1 час ) [0]
- [ ] [0]
- [ ] [0]
- [ ] [0]
### Прочее
- [ ] [0]
- [ ] [0]




## Обзор

### Что было хорошо:
 - 



### Что можно улучшить:


## Все созданные файлы


```dataview
TABLE tags AS "TAGS" ,
split(file.folder,"/") as Folders,
choice(contains(date," "), date(replace(string(date)," ", "T")+":00.000"), date) as date
FROM ""
WHERE (
choice(contains(this.date," "), date(replace(string(date)," ", "T")+":00.000"), date(date))
).weekyear = this.week and !(week=this.week)
sort date asc
```
