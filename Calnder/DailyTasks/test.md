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

```meta-bind-button
style: primary
hidden: true
label: Complete
id: "test"
action:
  type: updateMetadata
  bindTarget: completed,completed_at
  evaluate: true
  value: true, "tp.date.now('YYYY-MM-DD')"

```

  
`==BUTTON[test]==` `VIEW[{count}]`


## ⚠️Описание задачи:



## 📝Что нужно сделать:
