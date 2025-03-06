<%*
const firstDay = tp.date.weekday("D", 0); // День начала недели (1-31)
const lastDay = tp.date.weekday("D", 7); // День конца недели (1-31)

const firstMonth = tp.date.weekday("MMM", 0); // Название месяца начала недели (Jan, Feb)
const lastMonth = tp.date.weekday("MMM", 7); // Название месяца конца недели

const year = tp.date.weekday("YYYY", 0); // Год
const weekNumber = tp.date.weekday("Wo", 0); // Номер недели

const monthRange = firstMonth === lastMonth ? firstMonth : `${firstMonth}-${lastMonth}`; // Если месяц один, просто Jan, иначе Jan-Feb

const weekString = `${weekNumber} Week ${firstDay}-${lastDay} (${monthRange}) ${year}`;


await tp.file.rename(weekString)


const folderPath = "Calendar/Days"; 
const dateFormat = "DD-MM-YYYY dddd";
const templatePath =tp.file.find_tfile("Daily.md");

const days = [];
const daysDate = [];
for (let i = 0; i < 6; i++) {
    const dayDate = tp.date.weekday(dateFormat, i);
    const filePath = `${folderPath}/${dayDate}.md`;
	const dayDateCalendar = tp.date.weekday("DD-MM", i);
    await tp.file.create_new(templatePath, filePath, false);
    days.push(`${folderPath}/${dayDate}.md`);
    daysDate.push(dayDateCalendar)
}

%>---
week: <% moment(tp.date.now("YYYY-MM-DD"), "YYYY-MM-DD").format("WW") %>
status: false
rating: 0
---

```dataview
TABLE day, date, review, choice(completed = true, "✅", "🔄") AS Status
FROM "Calendar/Days" 
WHERE this.file.week = file.week
```

## Цели недели

- [ ]

## Обзор



### Что было хорошо:



### Что можно улучшить: