<%*
const folderPath = "Calendar/Ежедневник"; // Папка, куда сохранять заметки
const dateFormat = "YYYY-MM-DD"; // Формат даты в названии файла
const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const templatePath =tp.file.find_tfile(`Templates/Daily`);

for (let i = 0; i < 7; i++) {
    const dayDate = tp.date.weekday(dateFormat, i);
    const filePath = `${folderPath}/${dayDate}.md`;
    
    await tp.file.create_new(templatePath, filePath, false);
}
%>
