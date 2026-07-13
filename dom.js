import { addTask, taskList } from "./app.js";

// Set up event listeners
function setupEventListeners() {
    // Wrong selector method
    const addButton = document.querySelector(".add-task-btn");  // Wrong - mixing ID and class
    const taskInput = document.querySelector("#title");  // Missing #
    
    // Check that elements exist before aading listeners
    if (addButton){
        addButton.addEventListener("click", handleAddTask);
    }
    
    // Allow Enter key to add a task

    if (taskInput) {
        taskInput.addEventListener("keypress", (event) => {
            if (event.key === "Enter"){
                handleAddTask(event);
            }
        });
    }

}

// Function with DOM manipulation
function handleAddTask(event) {

    if (event) {
        event.preventDefault();
    }

    const titleInput = document.getElementById("title");
    const descInput = document.getElementById("description");
    const priorityInput = document.getElementById("priority");
    
    //validation
    if (!titleInput || !descInput || !priorityInput){
        return;
    }
    
    const title = titleInput.value;
    const description = descInput.value;
    const priority = Number(priorityInput.value);
    
    
    addTask(title, description, priority);
    saveTasks();
    displayTasks();


    
    // Missing: clear inputs after adding
    titleInput.value = "";
    descInput.value = "";
    priorityInput.value = "";
}

//Update Statistics
function updateStatistics() {
    const totalTasks = document.getElementById("total-tasks");
    const completedTasks = document.getElementById("completed-tasks");
    const averagePriority = document.getElementById("average-priority");

    if (!totalTasks || !completedTasks || !averagePriority) {
        return;
    }

    const completed = taskList.filter(task => task.completed).length;

    const average = taskList.length > 0
        ? Math.round(
            taskList.reduce((sum, task) => sum + task.priority, 0) / taskList.length
          )
        : 0;

    totalTasks.textContent = taskList.length;
    completedTasks.textContent = completed;
    averagePriority.textContent = average;
}

// Function that should use better selectors
function displayTasks() {
    const container = document.getElementById("task-list");

    // null check
    if (!container){
        return;
    }

    container.innerHTML = "";
    
    // Inefficient - should use template literals and insertAdjacentHTML
    for (let i = 0; i < taskList.length; i++) {
        const div = document.createElement("div");
        div.classList.add("task");
        div.dataset.id = taskList[i].id;

        div.innerHTML = `
        <h3>${taskList[i].title}</h3>
        <p>${taskList[i].description}</p>
        <p>Priority: ${taskList[i].priority}</p>
        <p>Completed: ${taskList[i].completed}</p>
        `;

        container.appendChild(div);
        
        // Missing: task ID, completion status, event handlers for delete/complete
    }
}

// Function with event handling issues
function handleTaskClick(event) {
    // Missing: event.target check
    // Missing: proper event delegation
    if (!event.target){
        return;
    }

    const task = event.target.closest(".task");

    if (!task){
        return;
    }

    const taskId = task.dataset.id;
    
    // Should toggle task completion
    console.log("Task clicked: " + taskId);
}

// JSON conversion functions
// function to savetasks from localStorage
function saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(taskList));
}

// functions to load tasks from localStorage
function loadTasks(){
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks){
        taskList.length = 0;
        taskList.push(...JSON.parse(savedTasks));
        displayTasks();
    }
}

// Initialize (wrong placement - should use DOMContentLoaded)
document.addEventListener("DOMContentLoaded", () =>{
    setupEventListeners();
    const container = document.getElementById("task-list");
    if (container) {
        container.addEventListener("click", handleTaskClick);
    }
    loadTasks();
});
