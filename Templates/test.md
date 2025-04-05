<%*
const TARGET_FOLDER = "Project notes";

const all = app.vault.getAllLoadedFiles();

// Фильтруем только папки, внутри TARGET_FOLDER
const folders = all.filter(f => 
    "children" in f && 
    f.path !== TARGET_FOLDER && 
    f.path.startsWith(TARGET_FOLDER + "/")
).map(f => f.path);

// Выбор папки
const selected = await tp.system.suggester(folders, folders);

// Возврат результата
tR = `Вы выбрали папку: ${selected}`;
%>