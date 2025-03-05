<%*
const folderPath = "Calendar"; // Папка, куда сохранять заметки (замени на свою)
const dateFormat = "YYYY-MM-DD"; // Формат имени файла

const templatePath =tp.file.find_tfile("Daily");

for (let i = 0; i < 7; i++) {
    const dayDate = tp.date.weekday(dateFormat, i); // Дата для каждого дня недели
    const filePath = `${folderPath}/Ежедневник/${dayDate}.md`; // Полный путь файла

    // Создание заметки
    await tp.file.create_new(templatePath, filePath, false);
}
%>
