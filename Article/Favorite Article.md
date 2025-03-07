```dataview
Table link,
date,review,
choice(readed = false, "❌", "✅") as read
FROM "Article/src"
where readed
sort review asc
```


```dataviewjs
dv.table(["Ссылка", "Дата", "Оценка", "Прочитано"], 
    dv.pages('"Article/src"')
      .filter(p => p.readed) // Фильтрация только прочитанных статей
      .sort(p => p.review, 'asc') // Сортировка по review (asc)
      .map(p => [
          `[🔗](${p.link})`, // Формат ссылки
          p.date,
          p.review,
          p.readed ? "✅" : "❌"
      ])
);

```