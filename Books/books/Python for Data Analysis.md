---
tag: 📚Book
title: "{{title}}"
subtitle: "{{subtitle}}"
author: [{{author}}]
category: [{{category}}]
publishdate: {{publishDate}}

pages: {{ totalPage }}
cover:{{ coverUrl }}
created:{{ DATE:YYYY-MM-DD }} 
rating: "0"
readed_at: 
readed: 0
status: To Do
source: 
progress: 0
language: eng
---
## Summary


## Notes
```dataview
List 
FROM "Books"
where source= this.source AND file.name != this.file.name
``` 