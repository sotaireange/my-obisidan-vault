---
sticker: lucide//calendar-days
color: var(--mk-color-orange)
---
```dataview
TABLE review,
choice(status = false, "🔄", "✅") as Status
FROM "Calendar/Weeks"
sort file.week desc
```