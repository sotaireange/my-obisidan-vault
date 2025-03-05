module.exports = async (tp) => {
    // Получаем текущую дату
    const currentDate = tp.date.now("YYYY-MM-DD");
    const weekNumber = tp.date.now("WW");
    
    // Путь к папке с шаблонами дней недели
    const templateFolder = "Templates/Daily";
    
    // Создаем шаблон еженедельника
    const weeklyTemplatePath = "Templates/Weekly.md";
    const weeklyFilePath = `Еженедельники/${currentDate} - Week ${weekNumber}.md`;
    await tp.file.create_new(weeklyTemplatePath, weeklyFilePath, false);

    // Массив дней недели (без воскресенья)
    const daysOfWeek = [
        { day: "Понедельник", offset: 1 },
        { day: "Вторник", offset: 2 },
        { day: "Среда", offset: 3 },
        { day: "Четверг", offset: 4 },
        { day: "Пятница", offset: 5 },
        { day: "Суббота", offset: 6 }
    ];

    // Создаем шаблоны для каждого дня недели
    for (const dayInfo of daysOfWeek) {
        const dayDate = tp.date.now("YYYY-MM-DD", dayInfo.offset);
        const dailyFilePath = `Ежедневники/${dayDate} - ${dayInfo.day}.md`;
        const dailyTemplatePath = `${templateFolder}/${dayInfo.day}.md`;
        
        await tp.file.create_new(dailyTemplatePath, dailyFilePath, false);
    }

    // Возвращаем путь к созданному еженедельнику
    return weeklyFilePath;
};