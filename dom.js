import { addTask } from "./app.js";

// Set up event listeners
function setupEventListeners() {
    // Wrong selector method
    const addButton = document.querySelector(".add-task-btn");  // Wrong - mixing ID and class
    const taskInput = document.querySelector("#task-input");  // Missing #
    
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
    displayTasks();
    
    // Missing: clear inputs after adding
    titleInput.value = "";
    descInput.value = "";
    priorityInput.value = "";
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
        div.innerHTML = `
            <h3>${taskList[i].title}</h3>
            <p>${taskList[i].description}</p>
        `;
        container.appendChild(div);
        
        // Missing: task ID, completion status, event handlers for delete/complete
    }
}

// Function with event handling issues
function handleTaskClick(event) {
    // Missing: event.target check
    // Missing: proper event delegation
    
    var taskId  to get task ID
    
    // Should toggle task completion
    console.log("Task clicked: " + taskId);
}

// Missing: JSON conversion functions
// Missing: functions to save/load tasks from localStorage

// Initialize (wrong placement - should use DOMContentLoaded)
setupEventListeners();
