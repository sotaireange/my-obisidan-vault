---
title: {{title}} 
author: {{author}}
category: {{category}}
publisher: {{publisher}}
publishdate: {{publishDate}}
pages: {{totalPage}}
cover: {{coverUrl}}
created: {{DATE:YYYY-MM-DD}}
rating:
date:
read:
status:
source:
progress: 0
---
## Summary


## Notes
```dataview
List 
FROM "Books"
where source= this.source AND file.name != this.file.name
```