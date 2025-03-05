<%*
const folderPath = "Calendar"; // Папка, куда сохранять заметки (замени на свою)
const dateFormat = "YYYY-MM-DD"; // Формат имени файла

const templatePath =await tp.file.find_tfile("Daily");


await tp.file.create_new(templatePath, filePath, false);
%>
