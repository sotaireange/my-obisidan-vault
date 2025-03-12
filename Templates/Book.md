---
title: {{title}} 
author: {{author}}
subcategory: <%=book.categories.map(category=>`\n  - ${category}`).join('')%>
publisher: {{publisher}}
publishdate: {{publishDate}}
pages: {{totalPage}}
cover: {{coverUrl}}
created: {{ DATE:YYYY-MM-DD }}
rating: 0
readed_at: 
readed: 0
status: To Do
source: 
language: eng
tags:
- 
type: book
category: 
-
---
## Summary
- Зачем мне эта книга?
	
- Аналоги этой книги.

- Почему эта книга лучше?

- Связки с книгой. Другие источники.

## Notes
```dataview
List 
FROM "Books"
where source= this.source AND file.name != this.file.name
```