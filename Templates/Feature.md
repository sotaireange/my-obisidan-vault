<%*
const feature_name = await tp.system.prompt("Напишите названиеи фичи");

const filename=`Feature_${feature_name}`
await tp.file.rename(filename)


let tags = ["feature"];

const allTags = Object.keys(app.metadataCache.getTags())
                    .filter(t => t.length > 1 && t !== "features");

let selected = [];
if (allTags.length > 0) {
    const selection = await tp.system.suggester(
        t => t, 
        allTags, 
        true, 
        "Выберите теги (Esc чтобы пропустить)"
    );
    
    if (selection) {
        selected = Array.isArray(selection) ? selection : [selection];
    }
}

// Добавление выбранных тегов
if (selected.length > 0) {
    tags.push(...selected.map(t => t.startsWith("#") ? t : `#${t}`)
                      .filter(t => t.length > 1));
}


links: <%`\n${formattedLinks} `%>

// Ручной ввод тегов
const manualTags = await tp.system.prompt("Добавить свои теги через запятую:");
if (manualTags) {
    tags.push(...manualTags.split(",")
        .map(t => t.trim())
        .map(t => `#${t.replace(/^#/, '')}`) 
        .filter(t => t.length > 1));
}
// Уникальные теги без дубликатов
tags = [...new Set(tags)].map(t => t.replace(/^#/, ''))%>---
date: <% tp.date.now("YYYY-MM-DD HH:MM") %>
tags: [<% tags.join(" ") %>]
source: 


---


## ⚠️Описание фичи:



## 📝Реализация:


## 🏗Затрагивается:

