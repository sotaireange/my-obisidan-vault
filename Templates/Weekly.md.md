<%*
const firstDay = tp.date.weekday("D", 1); // День начала недели (1-31)
const lastDay = tp.date.weekday("D", 7); // День конца недели (1-31)

const firstMonth = tp.date.weekday("MMM", 1); // Название месяца начала недели (Jan, Feb)
const lastMonth = tp.date.weekday("MMM", 7); // Название месяца конца недели

const year = tp.date.weekday("YYYY", 1); // Год
const weekNumber = tp.date.weekday("Wo", 1); // Номер недели

const monthRange = firstMonth === lastMonth ? firstMonth : `${firstMonth}-${lastMonth}`; // Если месяц один, просто Jan, иначе Jan-Feb

const weekString = `${weekNumber} Week ${firstDay}-${lastDay} (${monthRange}) ${year}`;


await tp.file.rename(weekString)
await tp.file.move(`Calendar/Weeks/${weekString}`)

const folderPath = "Calendar/Days"; 
const dateFormat = "DD-MM-YYYY dddd";
const templatePath =tp.file.find_tfile("Daily.md");

const days = [];
const daysDate = [];
for (let i = 1; i < 7; i++) {
    const dayDate = tp.date.weekday(dateFormat, i);
    const filePath = `${folderPath}/${dayDate}.md`;
	const dayDateCalendar = tp.date.weekday("DD-MM", i);
    await tp.file.create_new(templatePath, filePath, false);
    days.push(`${folderPath}/${dayDate}.md`);
    daysDate.push(dayDateCalendar)
}

%>---
week: <%  tp.date.weekday("WW", 1) %>
status: false
review: 0
dayreview: 0
date: <% tp.date.now("YYYY-MM-DD") %>
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
## Дни
```dataview
TABLE day, date, review, choice(completed = true, "✅", "🔄") AS Status
FROM "Calendar/Days" 
WHERE this.file.week = file.week
```

## Цели недели

### Общий:
- [ ] Прочитать >25%(~1часть)(3балла) [0]
- [ ] Ср.бал (>5=1,>7=2,>9=3)[0]
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
