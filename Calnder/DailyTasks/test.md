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


```button
name Завершить задачу
type script
action
const file = app.workspace.getActiveFile();
if (!file) return;

app.fileManager.processFrontMatter(file, (frontmatter) => {
  frontmatter.completed = true;
  frontmatter.completed_at = window.moment().format('YYYY-MM-DD');
});
color green
```

## ⚠️Описание задачи:



## 📝Что нужно сделать:
