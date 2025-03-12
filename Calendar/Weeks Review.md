---
sticker: emoji//23f3
color: ""
tags: pass
---
```dataview
TABLE review,
choice(status = false, "🔄", "✅") as Status
FROM "Calendar/Weeks"
sort file.week desc
```