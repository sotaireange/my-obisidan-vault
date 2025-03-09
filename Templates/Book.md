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
e## Summary


## Notes
```dataview
List 
FROM "Books"
where source= this.source AND file.name != this.file.name
```