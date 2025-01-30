const taskTitleInput = document.getElementById("taskTitle");
const taskDescriptionInput = document.getElementById("taskDescription");
const taskStatusInput = document.getElementById("taskStatus");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const searchInput = document.getElementById("searchInput");
const statusFilter = document.getElementById("statusFilter");
const tasks = [];

function filterTasks() {
    const searchText = searchInput.value.toLowerCase();
    const selectedStatus = statusFilter.value;

    return tasks.filter(task => {
        const matchesSearch = task.title.toLowerCase().includes(searchText);
        const matchesStatus = selectedStatus === 'all' || task.status === selectedStatus;
        return matchesSearch && matchesStatus;
    });
}

function renderTasks() {
    const filteredTasks = filterTasks();
    taskList.innerHTML = "";

    filteredTasks.forEach((task, index) => {
        const taskElement = document.createElement("li");
        taskElement.className = "task";

        const titleHTML = task.isEditing
            ? `<div class="edit-title">
                <input type="text" value="${task.title}" id="edit-${index}">
                <div class="edit-buttons">
                    <button onclick="saveTaskTitle(${index})">✓</button>
                    <button onclick="cancelEditing(${index})">✗</button>
                </div>
               </div>`
            : `<h2 class="task-title" onclick="startEditing(${index})">${task.title}</h2>`;

        taskElement.innerHTML = `
            ${titleHTML}
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

        if (task.isEditing) {
            const editInput = document.getElementById(`edit-${index}`);
            editInput.focus();
            editInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    saveTaskTitle(index);
                }
            });
        }
    });
}

function startEditing(index) {
    tasks[index].isEditing = true;
    renderTasks();
}

function saveTaskTitle(index) {
    const editInput = document.getElementById(`edit-${index}`);
    const newTitle = editInput.value.trim();

    if (newTitle) {
        tasks[index].title = newTitle;
        tasks[index].isEditing = false;
        renderTasks();
    }
}

function cancelEditing(index) {
    tasks[index].isEditing = false;
    renderTasks();
}

function addTask() {
    const title = taskTitleInput.value.trim();
    const description = taskDescriptionInput.value.trim();
    const status = taskStatusInput.value;
    const date = new Date().toLocaleString();

    if (!title) {
        alert("Please enter a task title!");
        return;
    }

    const task = {
        title,
        description,
        status,
        date,
        isEditing: false
    };
    tasks.push(task);
    renderTasks();

    taskTitleInput.value = "";
    taskDescriptionInput.value = "";
    taskStatusInput.value = "open";
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function updateTaskStatus(index, newStatus) {
    tasks[index].status = newStatus;
    renderTasks();
}

addTaskButton.addEventListener("click", addTask);
searchInput.addEventListener("input", renderTasks);
statusFilter.addEventListener("change", renderTasks);