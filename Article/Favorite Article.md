```dataview
Table link,
date,
choice(readed = false, "", "✅") as Status
``````dataview
TABLE review,
choice(status = false, "🔄", "✅") as Status
FROM "Calendar/Weeks"
sort file.week desc
```