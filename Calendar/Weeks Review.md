---
sticker: lucide//calendar-days
---
```dataview
TABLE dayreview,review,
choice(status = false, "🔄", "✅") as Status
FROM "Calendar/Weeks"
sort file.week desc
```