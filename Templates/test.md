<%*
const FOLDER= "Project notes/"
const projectFolders = app.vault.getFiles().filter(file => 
	file instanceof app.vault.constructor.TFolder &&
    file.path.startsWith(FOLDER)
);

// Выбор книги
let projectFolders;
if (bookFiles.length > 0) {
    selectedBook = await tp.system.suggester(
        file => file.basename,
        bookFiles
    );
}

%>