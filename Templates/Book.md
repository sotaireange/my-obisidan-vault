---
tag: Book
title: {{title}} 
author: {{author}}
category: {{category}}
publisher: {{publisher}}
publishdate: {{publishDate}}
pages: {{totalPage}}
cover: {{coverUrl}}
rating: 0
readed_at: 0
readed:0
status: To Do
source: 
language: eng
---
## Summary

created: {{ DATE:YYYY-MM-DD }}
## Notes
```dataview
List 
FROM "Books"
where source= this.source AND file.name != this.file.name
```