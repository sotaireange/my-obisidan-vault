<%*
const firstDay = tp.date.weekday("D", 0); // День начала недели (1-31)
const lastDay = tp.date.weekday("D", 6); // День конца недели (1-31)

const firstMonth = tp.date.weekday("MMM", 0); // Название месяца начала недели (Jan, Feb)
const lastMonth = tp.date.weekday("MMM", 6); // Название месяца конца недели

const year = tp.date.weekday("YYYY", 0); // Год
const weekNumber = tp.date.weekday("Wo", 0); // Номер недели

const monthRange = firstMonth === lastMonth ? firstMonth : `${firstMonth}-${lastMonth}`; // Если месяц один, просто Jan, иначе Jan-Feb

const weekString = `${firstDay}-${lastDay} (${monthRange}), Week ${weekNumber} ${year}`;
%>

week=<% weekString %>