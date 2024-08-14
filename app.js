const todoForm = document.getElementById('todoForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Array to store tasks
let tasks = [];

// Function to render tasks
function renderTasks() {
    // Clear existing list
    taskList.innerHTML = '';

    // Add tasks to the list
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${task}</span>
                        <button class="editBtn" onclick="editTask(${index})">Edit</button>
                        <button class="deleteBtn" onclick="deleteTask(${index})">Delete</button>`;
        taskList.appendChild(li);
    });
}

// Function to add a new task
function addTask(task) {
    tasks.push(task);
    renderTasks();
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Function to edit a task
function editTask(index) {
    const newTask = prompt('Edit task:', tasks[index]);
    if (newTask !== null) {
        tasks[index] = newTask;
        renderTasks();
    }
}

// Form submit event listener
todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const task = taskInput.value.trim();
    if (task !== '') {
        addTask(task);
        taskInput.value = '';
    }
});