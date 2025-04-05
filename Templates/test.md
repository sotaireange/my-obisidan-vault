<%*
const TARGET_FOLDER = "Project notes";

// Получаем саму папку
const parent = app.vault.getAbstractFileByPath(TARGET_FOLDER);

// Проверка на существование и наличие дочерних элементов
const folders = (parent?.children || [])
    .filter(f => "children" in f) // только папки
    .map(f => f.path);

// Выбор из списка
const selected = await tp.system.suggester(folders, folders);


const name = (tp.file.title).split(" ")[0] !== "Untitled" ? tp.file.title: await tp.system.prompt("Напишите новое название файла");

await tp.file.move(`${selected}/${name}`)




%>
