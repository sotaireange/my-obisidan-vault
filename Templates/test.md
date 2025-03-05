# Еженедельник <%= tp.date.now("YYYY-[W]WW") %>
<% 
const folderPath = "Calendar/Ежедневник"; 
const dateFormat = "DD-MM-YYYY";
const templatePath =tp.file.find_tfile(`Templates/Daily`);

for (let i = 0; i < 6; i++) {
    const dayDate = tp.date.weekday(dateFormat, i);
    const filePath = `${folderPath}/${dayDate}.md`;
    
    await tp.file.create_new(templatePath, filePath, false);
}
-%>
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