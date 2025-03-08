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
style: primary
hidden: true
label: Complete
id: "test"
action:
  type: updateMetadata
  bindTarget: completed
  evaluate: true
  value: true 

```

  



## ⚠️Описание задачи:



## 📝Что нужно сделать:
