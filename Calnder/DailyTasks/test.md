---
date: 2025-03-08
time: 01:04
completed: true
completed_at: 2025-03-08
type: DailyTask
poins: 1
priority: 4
source: 
---

```meta-bind-button
label: "Complete"
hidden: true
id: "complete"
style: default
actions:
  - type: updateMetadata
    bindTarget: completed
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
    value: "moment().format('YYYY-MM-DD')"
```


`BUTTON[complete,completed_at]`


## ⚠️Описание задачи:



## 📝Что нужно сделать:
