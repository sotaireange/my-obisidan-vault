---
title: {{title}} 
author: {{author}}
category: {{category}}
publisher: {{publisher}}
publishdate: {{publishDate}}
pages: {{totalPage}}
cover: {{coverUrl}}
rating:
date:
read:
status:
source:
---
## Summary


## Notes
```dataview
List 
FROM "Books"
where source= this.source AND file.name != this.file.name
``````dataviewjs
dv.table(["Статья", "Сайт","Язык", "Дата", "Оценка", "Прочитано"], 
    dv.pages('"Article/src"')
	  .filter(p => !p.readed)
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