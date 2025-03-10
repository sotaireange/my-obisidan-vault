---
sticker: emoji//23f2-fe0f
color: ""
---
```dataview
TABLE review,
choice(status = false, "🔄", "✅") as Status
FROM "Calendar/Weeks"
sort file.week desc
```