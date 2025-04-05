<%*
const FOLDER= "Project notes/"
const projectFolders = app.vault.getFiles().filter(file => 
    file.path.startsWith(FOLDER) && 
);

// Выбор книги
let selectedBook;
if (bookFiles.length > 0) {
    selectedBook = await tp.system.suggester(
        file => file.basename,
        bookFiles
    );
}

%>