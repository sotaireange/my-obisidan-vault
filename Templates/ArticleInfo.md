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
aliases: 
-
type: article
category: 
- 
source: <%link= await tp.system.prompt("Ссылка на статью") %>
link: 
- "[[]]"
language: <% await tp.system.suggester(item => item, ["rus", "eng"],false,"rus") %>
review: 0
readed: false
---
[Статья](<% link %>)

# Статья
## 📝О чем статья:   
-

## 🔥 Основные тезисы  
-  

## 🔎 Мысли 



## 🧠 Вывод




# Связи
**Source**
>`=join(this.source,"<br>")`

**Releated**
>`=join(this.link,"<br>")`

**Important links**




---

**Questions**
-
