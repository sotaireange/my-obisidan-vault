---
sticker: emoji//1f4d6
color: ""
---
```dataviewjs
dv.table(["Статья", "Сайт","Язык", "Дата", "Оценка", "Прочитано"], 
    dv.pages('"Article/src"')
      .sort(p => p.review, 'asc') // Сортировка по review
      .map(p => [
          `[[${p.file.name}]]`, // Ссылка на саму статью
          `[${new URL(p.link).hostname}](${p.link})`, // Отображение только домена
          p.language,
          p.date,
          p.review,
          p.readed ? "✅" : "❌"
      ])
);

```