<%*
const folderPath = "Calendar/Ежедневник"; 
const dateFormat = "DD-MM-YYYY";
const templatePath =tp.file.find_tfile(`Templates/Daily`);

for (let i = 0; i < 6; i++) {
    const dayDate = tp.date.weekday(dateFormat, i);
    const filePath = `${folderPath}/${dayDate}.md`;
    

}
%>
