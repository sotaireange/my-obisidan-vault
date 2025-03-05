# Еженедельник <%= tp.date.now("YYYY-[W]WW") %>

<% // Создание ежедневников const daysOfWeek = [ { number: 1, name: "Понедельник" }, { number: 2, name: "Вторник" }, { number: 3, name: "Среда" }, { number: 4, name: "Четверг" }, { number: 5, name: "Пятница" }, { number: 6, name: "Суббота" } ];

// Путь к шаблону ежедневника const dailyTemplatePath = "Templates/Daily.md";

// Создаем ежедневники for (const dayInfo of daysOfWeek) { const dayDate = tp.date.now("YYYY-MM-DD", dayInfo.number); const dailyFilePath = `Ежедневники/${dayInfo.number} день недели - ${dayDate}.md`;

```
await tp.file.create_new(dailyTemplatePath, dailyFilePath, false);
```

} -%>

## Дни недели

- [[1 день недели|Понедельник]]
- [[2 день недели|Вторник]]
- [[3 день недели|Среда]]
- [[4 день недели|Четверг]]
- [[5 день недели|Пятница]]
- [[6 день недели|Суббота]]

## Цели недели

- [ ]

## Задачи

### Вывод

- [ ]

## Заметки

## Рефлексия

- Что было хорошо:
- Что можно улучшить: