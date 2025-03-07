```dataviewjs
dv.table(["Статья", "Сайт", "Дата", "Оценка", "Прочитано"], 
    dv.pages('"Article/src"')
      .sort(p => p.review, 'asc') // Сортировка по review
      .map(p => [
          `[[${p.file.name}]]`, // Ссылка на саму статью
          `[${new URL(p.link).hostname}](${p.link})`, // Отображение только домена
          p.date,
          p.review,
          p.readed ? "✅" : "❌"
      ])
);

```