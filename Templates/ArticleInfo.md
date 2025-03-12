<%*
const name = await tp.system.prompt("Напишите название статьи");
await tp.file.rename(name)
await tp.file.move(`Article/src/${name}`)



let tags = [];

const manualTags = await tp.system.prompt("Добавить свои теги через запятую:");
if (manualTags) {
    tags.push(...manualTags.split(",")
        .map(t => t.trim())
        .map(t => `${t.replace(/^#/, '')}`) 
        .filter(t => t.length > 1));
}
%>---
tags: <% `\n- ${tags.join("\n- ")}`%>
date: <% await tp.date.now("YYYY-MM-DD") %>
link: <%link= await tp.system.prompt("Ссылка на статью") %>
time: <% await tp.date.now("HH:mm") %>
language: <% await tp.system.suggester(item => item, ["rus", "eng"],false,"rus") %>
type: 
category: Article
review: 0
readed: false
---
[Статья](<% link %>)

## 📝О чем статья:   
-

## 🔥 Основные тезисы  
-  


## 🔎 Анализ  
-  

<%* 
// Запрос у пользователя, нужно ли добавлять блок с кодом
const addCodeBlock = await tp.system.prompt("Хотите добавить пример кода/алгоритма? (да/нет)", "нет");

// Если пользователь ввел "да", добавляем блок
if (addCodeBlock.toLowerCase() === "да") { 
-%>
## 🛠 Практическое применение
```python

<%* } %>

