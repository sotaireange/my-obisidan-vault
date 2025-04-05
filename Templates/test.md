<%*
const PROJECT_FOLDER= "Project notes/"
const name = (tp.file.title).split(" ")[0] !== "Untitled" ? tp.file.title: await tp.system.prompt("Напишите новое название проекта");


const projectFile=`${PROJECT_FOLDER}/${name}/${name}.md`
await tp.file.move(projectFile);

%>