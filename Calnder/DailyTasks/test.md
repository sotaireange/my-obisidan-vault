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
label: "+1"
hidden: true
id: "count-increment"
style: default
actions:
  - type: updateMetadata
    bindTarget: count
    evaluate: true
    value: "x + 1"
```

```meta-bind-button
label: "-1"
hidden: true
id: "count-decrement"
style: default
actions:
  - type: updateMetadata
    bindTarget: count
    evaluate: true
    value: "tp.date.now('YYYY-MM-DD')"
```


`BUTTON[count-decrement, count-reset, count-increment]` `VIEW[{count}]`



## ⚠️Описание задачи:



## 📝Что нужно сделать:
