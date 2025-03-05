<%*
const firstDay = tp.date.weekday("D", 1); // День начала недели (1-31)
const lastDay = tp.date.weekday("D", 7); // День конца недели (1-31)

const firstMonth = tp.date.weekday("MMM", 1); // Название месяца начала недели (Jan, Feb)
const lastMonth = tp.date.weekday("MMM", 7); // Название месяца конца недели

const year = tp.date.weekday("YYYY", 1); // Год
const weekNumber = tp.date.weekday("Wo", 1); // Номер недели

const monthRange = firstMonth === lastMonth ? firstMonth : `${firstMonth}-${lastMonth}`; // Если месяц один, просто Jan, иначе Jan-Feb

const weekPath = `Calendar/Еженедельник/${weekNumber} Week ${firstDay}-${lastDay} (${monthRange}) ${year}`;

%>---
date: <% moment(tp.file.title, "DD-MM-YYYY dddd").format("YYYY-MM-DD") %>
source: <% `"[[${weekPath}|${weekNumber}th Week]]"` %>
---


## Расписание

## Задачи

### Утро

- [ ]

### День

- [ ]

### Вечер

- [ ]

## Заметки

## Рефлексия

- Что было хорошо:
- Что можно улучшить: