<%* 
const fileName = await tp.system.prompt("Напишите новое название файла");

await tp.file.rename(fileName)

await tp.file.move(`Article/${fileName}`)
let tags = ["#article"];
const manualTags = await tp.system.prompt("Добавить свои теги через запятую:");
if (manualTags) {
    tags.push(...manualTags.split(",")
        .map(t => t.trim())
        .map(t => `#${t.replace(/^#/, '')}`) 
        .filter(t => t.length > 1));
}
// Уникальные теги без дубликатов
tags = [...new Set(tags)].map(t => t.replace(/^#/, ''))%>---
tags: <% tags.join(" ") %>
created:
  - <% tp.date.now("DD-MM-YYYY HH:MM") %>
source: <% await tp.system.prompt("Введите ссылку")  %>
---
## 🔥 Основные тезисы  
-  

## 📌 Описание проблемы  
-  

## 🔎 Анализ  
-  

<%* 
// Запрос у пользователя, нужны ли иллюстрации
const addIllustrations = await tp.system.prompt("Хотите добавить иллюстрации? (да/нет)", "нет");

// Если пользователь ввел "да", добавляем блок
if (addIllustrations.toLowerCase() === "да") { 
-%>
## 📷 Иллюстрации  

<%* } %>
<%* 
// Запрос у пользователя, нужно ли добавлять блок с кодом
const addCodeBlock = await tp.system.prompt("Хотите добавить пример кода/алгоритма? (да/нет)", "нет");

// Если пользователь ввел "да", добавляем блок
if (addCodeBlock.toLowerCase() === "да") { 
-%>
## 🛠 Практическое применение
```python

<%* } %>

