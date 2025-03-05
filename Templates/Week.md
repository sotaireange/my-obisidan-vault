<%*
const firstDay = tp.date.weekday("D", 0); // День начала недели (1-31)
const lastDay = tp.date.weekday("D", 6); // День конца недели (1-31)

const firstMonth = tp.date.weekday("MMM", 0); // Название месяца начала недели (Jan, Feb)
const lastMonth = tp.date.weekday("MMM", 6); // Название месяца конца недели

const year = tp.date.weekday("YYYY", 0); // Год
const weekNumber = tp.date.weekday("Wo", 0); // Номер недели

const monthRange = firstMonth === lastMonth ? firstMonth : `${firstMonth}-${lastMonth}`; // Если месяц один, просто Jan, иначе Jan-Feb

const weekString = `${firstDay}-${lastDay} (${monthRange}), Week ${weekNumber} ${year}`;


%>

Week_day_first=<% firstDay %>  
Week_day_last=<% lastDay %>  
week = <% weekString %>
<%*
const folderPath = "Calendar"; // Папка, куда сохранять заметки (замени на свою)
const dateFormat = "YYYY-MM-DD"; // Формат имени файла
const templatePath = "Templates/DailyTemplate"; // Шаблон для дневных заметок (если нужен)

for (let i = 0; i < 7; i++) {
    const dayDate = tp.date.weekday(dateFormat, i); // Дата для каждого дня недели
    const filePath = `${folderPath}/${dayDate}.md`; // Полный путь файла

    // Создание заметки
    await tp.file.create_new(templatePath, filePath, false);
}
%>
