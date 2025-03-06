```dataview
TABLE rating,
choice(status = false, "🔄", "✅") as Status
FROM "Calendar/Weeks"
sort file.week desc
```