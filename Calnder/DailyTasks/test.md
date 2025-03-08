---
count: true
---
<%* 
interface UpdateMetadataButtonAction {

	type: 'updateMetadata';
	
	bindTarget: string; // the bind target of the property to update
	
	evaluate: boolean; // whether to treat the value as a JavaScript expression
	
	value: string; // the value to set the property to or the JavaScript expression to evaluate
	}
%>---
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
label: "Complete"
hidden: true
id: "complete"
style: default
actions:
  - type: updateMetadata
    bindTarget: count
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
    bindTarget: count
    evaluate: true
    value: "tp.date.now('YYYY-MM-DD')"
```


`BUTTON[complete,completed_at]`


## ⚠️Описание задачи:



## 📝Что нужно сделать:
