---
tags:
  - Book
title: {{title}} 
author: {{author}}
category: <%=book.categories.map(category=>`\n  - ${category}`).join('')%>

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
---
## Summary


## Notes
```dataview
List 
FROM "Books"
where source= this.source AND file.name != this.file.name
```