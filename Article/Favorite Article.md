```dataview
Table link,
date,review,
choice(readed = false, "❌", "✅") as read
FROM "Article/src"
where readed
sort review asc
```


```dataviewjs
dv.table(["Название", "Ссылка"], dv.pages('"Заметки"').map(p => [ p.file.name, `[Перейти](${p.link})` ]) );
```