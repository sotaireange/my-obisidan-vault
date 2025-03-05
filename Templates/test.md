<%*
const firstDay=tp.date.weekday("MM-DD", 0)
const lastDay= tp.date.weekday("MM-DD YYYY", 7)

%>


Week_day_first=<% firstDay %>
week_day_last=<% lastDay %>
week = <% `${firstDay}-${lastDay}`%>