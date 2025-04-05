<%*
const FOLDER= "Project notes/"
const projectFolders = app.vault.getFiles().filter(file => 
	file instanceof app.vault.constructor.TFolder &&
    file.path.startsWith(FOLDER)
);

// Выбор книги
let selectedProject;
if (projectFolders.length > 0) {
    selectedProject = await tp.system.suggester(
        file => file.basename,
        bookFiles
    );
}

%>