document.addEventListener("DOMContentLoaded", function() {
    
    const taskInput = document.getElementById("input_task");
    const displayTasks = document.getElementById("display_tasks");
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();  
        
        const taskValue = taskInput.value.trim();
    
        if (taskValue !== "") {
            addTask(taskValue);
            taskInput.value = ""; 
        }
    });

    function addTask(taskValue) {
        const taskDiv = document.createElement("div");
        taskDiv.className = "task";

        const taskText = document.createElement("span");
        taskText.textContent = taskValue;

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.className = "edit";

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete";
        
        editButton.addEventListener("click", function() {
            editTask(taskDiv, taskText);
        });

        deleteButton.addEventListener("click", function() {
            let permission = window.confirm("Confirm Delete this task? ")
            if(permission){
                displayTasks.removeChild(taskDiv);
            }
            
            
        });

        taskDiv.appendChild(taskText);
        taskDiv.appendChild(editButton);
        taskDiv.appendChild(deleteButton);

        displayTasks.appendChild(taskDiv);
    }

    function editTask(taskDiv, taskText) {
        const editInput = document.createElement("input");
        editInput.type = "text";
        editInput.value = taskText.textContent;
        editInput.className = "edit-input";

        taskDiv.replaceChild(editInput, taskText);

        const saveButton = taskDiv.querySelector(".edit");
        saveButton.textContent = "Save";
        saveButton.className = "save";

        saveButton.addEventListener("click", function() {
            saveEditedTask(taskDiv, editInput, taskText);
        });
    }

    function saveEditedTask(taskDiv, editInput, taskText) {
        const newTaskValue = editInput.value.trim();

        if (newTaskValue !== "") {
            taskText.textContent = newTaskValue;

            taskDiv.replaceChild(taskText, editInput);

            const editButton = taskDiv.querySelector(".save");
            editButton.textContent = "Edit";
            editButton.className = "edit";

            editButton.removeEventListener("click", function() {});
            editButton.addEventListener("click", function() {
                editTask(taskDiv, taskText);
            });
        }
    }
});
