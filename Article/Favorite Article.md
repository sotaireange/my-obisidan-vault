```dataview
Table link,
date,review,
choice(readed = false, "❌", "✅") as read
FROM "Article/src"
where readed
sort review asc
```