---
date: 2025-03-08
time: 01:04
completed: false
completed_at: 
type: DailyTask
poins: 1
priority: 4
source: 
count: true
---

```meta-bind-button
label: "Complete"
hidden: true
id: "complete"
style: default
actions:
  - type: updateMetadata
    bindTarget: complete
    evaluate: false
    value: true
```

```meta-bind-button
label: "Completed_at"
hidden: true
id: "completed_at"
style: default
actions:
  - type: updateMetadata
    bindTarget: completed_at
    evaluate: true
    value: "tp.date.now('YYYY-MM-DD')"
```


`BUTTON[complete,completed_at]`


## ⚠️Описание задачи:



## 📝Что нужно сделать:
