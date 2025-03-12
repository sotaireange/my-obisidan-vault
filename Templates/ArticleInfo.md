<%*
const name = (tp.file.title).split(" ")[0] !== "Untitled" ? tp.file.title: await tp.system.prompt("Напишите новое название файла");

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
time: <% await tp.date.now("HH:mm") %>
type: Article
category: 
- 
releated: 
-
aliases: 
-
source: <%link= await tp.system.prompt("Ссылка на статью") %>

language: <% await tp.system.suggester(item => item, ["rus", "eng"],false,"rus") %>
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




```
# Back Matter

**Source**
<!-- Always keep a link to the source- --> 
- based_on::

**References**
<!-- Links to pages not referenced in the content. see: [[related note]] because <reason> -->
- see:: 

**Terms**
<!-- Links to definition pages. -->
- 

**Target**
<!-- Link to project note or externaly published content. -->
- used_in::

---
**Tasks**
<!-- What remains to be done with this note? --> 
- 

**Questions**
<!-- What remains for you to consider? --> 
- question::
