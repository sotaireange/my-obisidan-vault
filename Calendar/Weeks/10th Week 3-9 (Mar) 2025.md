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
const pages = dv.pages().where(p => p.file.week == dv.current().file.week);
let dailyScores = {};

// Проходим по всем заметкам текущей недели
for (let page of pages) {
    let tasks = page.file.tasks.filter(t => t.completed);
    let score = 0;

    // Извлекаем баллы из текста задач
    for (let task of tasks) {
        let match = task.text.match(/\[(\d+)\]/); // Ищем число в квадратных скобках
        if (match) score += parseInt(match[1]); // Добавляем к общему счёту
    }

    // Запоминаем сумму баллов за день
    let day = page.date.toISODate(); // Получаем дату в формате YYYY-MM-DD
    dailyScores[day] = (dailyScores[day] || 0) + score;
}

// Вывод результатов
dv.table(["Дата", "Баллы"], Object.entries(dailyScores).sort(([a], [b]) => a.localeCompare(b)));
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
