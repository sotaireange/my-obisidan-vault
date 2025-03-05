<%* 
const folderPath = "Calendar/Ежедневник"; 
const dateFormat = "DD-MM-YYYY";
const templatePath ="Templates/Daily";

const days = [];

for (let i = 0; i < 6; i++) {
    const dayDate = tp.date.weekday(dateFormat, i);
    const filePath = `${folderPath}/${dayDate}.md`;
    
    await tp.file.create_new(templatePath, filePath, false);
    days.push(dayDate);
}
%>