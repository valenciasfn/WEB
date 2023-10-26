document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");
    let editMode = false; 

    addTaskButton.addEventListener("click", function() {
        const taskText = taskInput.value.trim(); // Menggunakan trim() untuk menghapus spasi di awal dan akhir
        if (taskText !== "") {
            if (editMode) {
                const editedItem = taskList.querySelector(".editing");
                editedItem.firstChild.textContent = taskText;
                editMode = false;
                editedItem.classList.remove("editing");
            } else {
                const listItem = document.createElement("li");
                listItem.className = "list-group-item";
                listItem.innerHTML = `
                    ${taskText}
                    <span class="float-right">
                        <button class="btn btn-sm btn-danger bi bi-trash delete"></button>
                        <button class="btn btn-sm btn-warning bi bi-pencil-square edit"></button>
                    </span>
                `;
                taskList.appendChild(listItem);

                const deleteButton = listItem.querySelector(".delete");
                deleteButton.addEventListener("click", function() {
                    taskList.removeChild(listItem);
                });

                const editButton = listItem.querySelector(".edit");
                editButton.addEventListener("click", function() {
                    taskInput.value = taskText;
                    editMode = true;
                    listItem.classList.add("editing");
                });
            }

            taskInput.value = "";
        }
    });
});
