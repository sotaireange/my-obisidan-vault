<%*
const feature_name = await tp.system.prompt("Напишите названиеи фичи");


await tp.file.rename(filename)
await tp.file.move('Features/${filename}.md')

let tags = [];
// Ручной ввод тегов
const manualTags = await tp.system.prompt("Добавить свои теги через запятую:");
if (manualTags) {
    tags.push(...manualTags.split(",")
        .map(t => t.trim())
        .map(t => `${t.replace(/^#/, '')}`) 
        .filter(t => t.length > 1));
}

const manualLinks = await tp.system.prompt("Добавить свои линки через запятую:"); const formattedLinks = manualLinks.split(",")
.map(l => `- "[[${l.trim()}]]"`)
.join("\n");
// Уникальные теги без дубликатов
tags = [...new Set(tags)].map(t => t.replace(/^#/, ''))%>---
date: <% tp.date.now("YYYY-MM-DD") %>
time: <% tp.date.now("HH:mm") %>
type: feature
category: 
- 
tags: <% `\n- ${tags.join("\n- ")}`%>
links: <%`\n${formattedLinks} `%>
source: 


---


## ⚠️Описание фичи:



## 📝Реализация:


## 🏗Затрагивается:

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
