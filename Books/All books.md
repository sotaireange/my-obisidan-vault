---
sticker: emoji//1f4d5
color: ""
---
```dataview
TABLE ("![|100](" + cover + ")") as Cover,readed as completed,rating, category,status
FROM "Books/books" 
WHERE contains(author, "") 
SORT status desc
```