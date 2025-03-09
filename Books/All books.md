---
sticker: emoji//1f4d5
color: ""
---
```dataview
TABLE author,("![|100](" + cover + ")") as Cover,rating,pages, category,status
FROM "Books/books" 
WHERE contains(author, "") 
```