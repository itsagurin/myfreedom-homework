const todoInput = document.getElementById("todoInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const todoList = document.getElementById("todoList");
const tasks = [];

function renderTasks() {
    todoList.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskItem = document.createElement("div");
        taskItem.className = "list-group-item d-flex justify-content-between align-items-center task";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "form-check-input me-2";
        checkbox.addEventListener("change", function () {
            taskItem.style.backgroundColor = this.checked ? "#d4edda" : "white";
        });

        const taskText = document.createElement("span");
        taskText.className = "flex-grow-1";
        taskText.textContent = task;

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "btn btn-danger btn-sm";
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", function () {
            tasks.splice(index, 1);
            renderTasks();
        });

        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskText);
        taskItem.appendChild(deleteBtn);
        todoList.appendChild(taskItem);
    });
}

function addTask() {
    const task = todoInput.value.trim();
    if (task) {
        tasks.push(task);
        renderTasks();
        todoInput.value = "";
    } else {
        alert("Please enter a task");
    }
}

addTaskBtn.addEventListener("click", addTask);
todoInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});