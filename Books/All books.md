---
sticker: emoji//1f4d5
color: var(--mk-color-pink)
---
```dataview
TABLE author, category,status
FROM "Books/books" 
WHERE contains(author, "") 
```