<%*
const firstDay=tp.date.weekday("YYYY-MM-DD", 0)
const lastDay= tp.date.weekday("YYYY-MM-DD", 7)

%>


Week_day_first=<% firstDay %>
week_day_last=<% lastDay %>
week = <% `${firstDay}-${lastDay}`%>