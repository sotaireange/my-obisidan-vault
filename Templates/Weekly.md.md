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


const folderPath = "Calendar/Ежедневник"; 
const dateFormat = "DD-MM-YYYY dddd";
const templatePath =tp.file.find_tfile("Daily.md");

const days = [];
const daysDate = [];
for (let i = 0; i < 6; i++) {
    const dayDate = tp.date.weekday(dateFormat, i+1);
    const filePath = `${folderPath}/${dayDate}.md`;
    
    await tp.file.create_new(templatePath, filePath, false);
    days.push(`${folderPath}/${dayDate}.md`);
    daysDate.push(dayDate)
}

%>---
week: <% moment(tp.date.now("YYYY-MM-DD"), "YYYY-MM-DD").format("WW") %>
---
## Дни недели

- [ ] 📅 2025-03-06 [[<% days[0] %>|Понедельник 📅 <% dayDate %>]]
- [ ] [[<% days[1] %>|Вторник 📅 <% dayDate %>]]
- [ ] [[<% days[2] %>|Среда 📅 <% dayDate %>]]
- [ ] [[<% days[3] %>|Четверг 📅 <% dayDate %>]]
- [ ] [[<% days[4] %>|Пятница 📅 <% dayDate %>]]
- [ ] [[<% days[5] %>|Суббота 📅 <% dayDate %>]]

## Цели недели

- [ ]

## Задачи

### Вывод

- [ ]

## Заметки

## Рефлексия

- Что было хорошо:
- Что можно улучшить: