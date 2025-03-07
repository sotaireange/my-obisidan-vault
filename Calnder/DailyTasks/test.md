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

const { app } = app.plugins.plugins["metaedit"].api;
const today = window.moment().format('YYYY-MM-DD');

// Обновляем оба свойства
await app.update("completed", "true", file);
await app.update("completed_at", today, file);

// Обновляем вид документа, чтобы изменения отобразились
app.workspace.trigger("metadata-changed", file);
color green
```

## ⚠️Описание задачи:



## 📝Что нужно сделать:
