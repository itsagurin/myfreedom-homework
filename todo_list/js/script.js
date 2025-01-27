const taskTitleInput = document.getElementById("taskTitle");
const taskDescriptionInput = document.getElementById("taskDescription");
const taskStatusInput = document.getElementById("taskStatus");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// Массив для хранения задач
const tasks = [];

// Функция для отображения задач
function renderTasks() {
    taskList.innerHTML = ""; // Очищаем список
    tasks.forEach((task, index) => {
        const taskElement = document.createElement("li");
        taskElement.className = "task";
        taskElement.innerHTML = `
            <h2>${task.title}</h2>
            <p>${task.description}</p>
            <p class="date">Created: ${task.date}</p>
            <label for="status-${index}">Status:</label>
            <select id="status-${index}" onchange="updateTaskStatus(${index}, this.value)">
                <option value="open" ${task.status === "open" ? "selected" : ""}>Open</option>
                <option value="close" ${task.status === "close" ? "selected" : ""}>Close</option>
                <option value="scheduled" ${task.status === "scheduled" ? "selected" : ""}>Scheduled</option>
            </select>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(taskElement);
    });
}

// Функция для добавления задачи
function addTask() {
    const title = taskTitleInput.value.trim();
    const description = taskDescriptionInput.value.trim();
    const status = taskStatusInput.value;
    const date = new Date().toLocaleString();

    if (!title) {
        alert("Please enter a task title!");
        return;
    }

    const task = { title, description, status, date };
    tasks.push(task);
    renderTasks();

    taskTitleInput.value = "";
    taskDescriptionInput.value = "";
    taskStatusInput.value = "open";
}

// Функция для удаления задачи
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Функция для обновления статуса задачи
function updateTaskStatus(index, newStatus) {
    tasks[index].status = newStatus;
    renderTasks();
}

addTaskButton.addEventListener("click", addTask);