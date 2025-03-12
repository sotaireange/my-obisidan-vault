---
tags: pass
---

```dataview
Table author as Author, ("![|100](" + cover + ")") as Cover, pages, category as genre, rating 
From "Books/books" 
Where contains(status, "complete") 
```