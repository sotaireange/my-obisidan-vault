```dataviewjs
const metaEdit = this.app.plugins.plugins["metaedit"]?.api;
const { createButton } = app.plugins.plugins["buttons"];

if (!metaEdit) {
    console.error("❌ MetaEdit API не найден!");
} else {
    console.log("✅ MetaEdit API загружен.");
}

dv.table(["Name", "Status", "Project", "Due Date", ""], dv.pages("#tasks")
    .sort(t => t["due-date"], 'desc')

    .map(t => {
        return [
            t.file.link,
            t.status,
            t.project,
            t["due-date"],
            createButton({
                app, 
                el: this.container, 
                args: { name: "Done!" }, 
                clickOverride: {
                    click: async () => {
                        if (!metaEdit) {
                            console.error("❌ MetaEdit API недоступен!");
                            return;
                        }

                        console.log(`ℹ️ Обновляем файл: ${t.file.path}`);

                        try {
                            await metaEdit.update("Status", "Completed", t.file.path);
                            console.log("✅ Статус обновлён!");

                            await metaEdit.update("Priority", moment().format("YYYY-MM-DD"),t.file.path);
                            console.log("✅ Дата завершения обновлена!");

                        } catch (error) {
                            console.error("❌ Ошибка при обновлении метаданных:", error);
                        }
                    },
                    params: [] // ✅ Добавляем пустой массив, чтобы избежать ошибки
                }
            })
        ];
    })
);


```