---
tag: Book
title: "{{ title }}"
author: "{{ author }}"
category: [Computers]
publisher: {{ publisher }}
publishdate: {{ publishDate }}
pages: {{ totalPage }}
cover: {{ coverUrl }}
created: 2025-03-10
rating: 0
readed_at: 0
readed:
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