---
date: 2025-03-08
time: 01:04
completed: false
completed_at:  
type: DailyTask
poins: 1
priority: 4
source: 
---

```button name Завершить задачу type append action this.app.fileManager.processFrontMatter( this.app.workspace.getActiveFile(), (frontmatter) => { frontmatter.completed = true; frontmatter.completed_at = new Date().toISOString().split('T')[0]; } ) color green
```

## ⚠️Описание задачи:



## 📝Что нужно сделать:
