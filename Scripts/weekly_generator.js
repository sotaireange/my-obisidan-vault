module.exports = async (tp) => {
    // Получаем текущую дату
    const currentDate = tp.date.now("YYYY-MM-DD");
    const weekNumber = tp.date.now("WW");
    
    // Путь к шаблонам
    const weeklyTemplatePath = "Templates/Weekly.md";
    const dailyTemplatePath = "Templates/Daily.md";
    
    // Создаем еженедельник
    const weeklyFilePath = `Еженедельники/${currentDate} - Week ${weekNumber}.md`;
    await tp.file.create_new(weeklyTemplatePath, weeklyFilePath, false);

    // Массив дней недели
    const daysOfWeek = [
        { number: 1, name: "Понедельник" },
        { number: 2, name: "Вторник" },
        { number: 3, name: "Среда" },
        { number: 4, name: "Четверг" },
        { number: 5, name: "Пятница" },
        { number: 6, name: "Суббота" }
    ];

    // Создаем ежедневники
    for (const dayInfo of daysOfWeek) {
        const dayDate = tp.date.now("YYYY-MM-DD", dayInfo.number);
        const dailyFilePath = `Ежедневники/${dayInfo.number} день недели - ${dayDate}.md`;
        
        await tp.file.create_new(dailyTemplatePath, dailyFilePath, false);
    }

    // Возвращаем путь к созданному еженедельнику
    return weeklyFilePath;
};