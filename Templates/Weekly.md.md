<%*
const firstDay = tp.date.weekday("D", 0); // День начала недели (1-31)
const lastDay = tp.date.weekday("D", 7); // День конца недели (1-31)

const firstMonth = tp.date.weekday("MMM", 0); // Название месяца начала недели (Jan, Feb)
const lastMonth = tp.date.weekday("MMM", 7); // Название месяца конца недели

const year = tp.date.weekday("YYYY", 0); // Год
const weekNumber = tp.date.weekday("Wo", 9); // Номер недели

const monthRange = firstMonth === lastMonth ? firstMonth : `${firstMonth}-${lastMonth}`; // Если месяц один, просто Jan, иначе Jan-Feb

const weekString = `${weekNumber} Week ${firstDay}-${lastDay} (${monthRange}) ${year}`;


await tp.file.rename(weekString)


const folderPath = "Calendar/Days"; 
const dateFormat = "DD-MM-YYYY dddd";
const templatePath =tp.file.find_tfile("Daily.md");

const days = [];
const daysDate = [];
for (let i = 0; i < 6; i++) {
    const dayDate = tp.date.weekday(dateFormat, i+1);
    const filePath = `${folderPath}/${dayDate}.md`;
	const dayDateCalendar = tp.date.weekday("DD-MM", i+1);
    await tp.file.create_new(templatePath, filePath, false);
    days.push(`${folderPath}/${dayDate}.md`);
    daysDate.push(dayDateCalendar)
}

%>---
week: <% moment(tp.date.now("YYYY-MM-DD"), "YYYY-MM-DD").format("WW") %>
status: Active
rating: 0
---
## Дни недели

- [ ] [[<% days[0] %>|Понедельник 📅 <% daysDate[0] %>]]
- [ ] [[<% days[1] %>|Вторник 📅 <% daysDate[1] %>]]
- [ ] [[<% days[2] %>|Среда 📅 <% daysDate[2] %>]]
- [ ] [[<% days[3] %>|Четверг 📅 <% daysDate[3] %>]]
- [ ] [[<% days[4] %>|Пятница 📅 <% daysDate[4] %>]]
- [ ] [[<% days[5] %>|Суббота 📅 <% daysDate[5] %>]]

## Цели недели

- [ ]

## Задачи

### Вывод

- [ ]

## Заметки

## Рефлексия

- Что было хорошо:
- Что можно улучшить: