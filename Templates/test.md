<%*
const folderPath = "Calendar"; // Папка, куда сохранять заметки
const dateFormat = "YYYY-MM-DD"; // Формат даты в названии файла
const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

for (let i = 0; i < 7; i++) {
    const dayName = weekDays[i];
    const dayDate = tp.date.weekday(dateFormat, i);
    const filePath = `${folderPath}/${dayDate}.md`; // Полный путь файла
    tp.file.find_tfile(`Days/$`)
    const templatePath = `Templates/Days/${dayName}.md`; // Шаблон для дня

    await tp.file.create_new(templatePath, filePath, false);
}
%>
