<%*
const firstDay = tp.date.weekday("D", 0); // День начала недели (1-31)
const lastDay = tp.date.weekday("D", 6); // День конца недели (1-31)

const firstMonth = tp.date.weekday("MMM", 0); // Название месяца начала недели (Jan, Feb)
const lastMonth = tp.date.weekday("MMM", 6); // Название месяца конца недели

const year = tp.date.weekday("YYYY", 0); // Год
const weekNumber = tp.date.weekday("Wo", 0); // Номер недели

const monthRange = firstMonth === lastMonth ? firstMonth : `${firstMonth}-${lastMonth}`; // Если месяц один, просто Jan, иначе Jan-Feb

const weekString = `${firstDay}-${lastDay} (${monthRange}), Week ${weekNumber} ${year}`;


await tp.file.rename(weekString)


const folderPath = "Calendar/Ежедневник"; 
const dateFormat = "DD-MM-YYYY";
const templatePath =tp.file.find_tfile(`Templates/Daily`);

for (let i = 0; i < 6; i++) {
    const dayDate = tp.date.weekday(dateFormat, i);
    const filePath = `${folderPath}/${dayDate}.md`;
    
    await tp.file.create_new(templatePath, filePath, false);
}

%>

# Еженедельник <% weekString %>

## Дни недели

- [[1 день недели|Понедельник]]
- [[2 день недели|Вторник]]
- [[3 день недели|Среда]]
- [[4 день недели|Четверг]]
- [[5 день недели|Пятница]]
- [[6 день недели|Суббота]]

## Цели недели

- [ ]

## Задачи

### Вывод

- [ ]

## Заметки

## Рефлексия

- Что было хорошо:
- Что можно улучшить: