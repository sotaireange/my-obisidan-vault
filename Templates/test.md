<%*
tp.system.suggester((item) => item, ["Happy", "Sad", "Confused"])
tp.system.prompt("What is your mood today?", null, false, true)
%>---
date: <% moment(date, "DD-MM-YYYY").format("YYYY-MM-DD") %>
---