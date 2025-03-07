```dataview
Table link,
date,review,
choice(readed = false, "❌", "✅") as read
FROM "Article/src"
sort review asc

``````dataview
TABLE review,
choice(status = false, "🔄", "✅") as Status
FROM "Calendar/Weeks"
sort file.week desc
```