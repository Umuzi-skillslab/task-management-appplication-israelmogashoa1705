import { addTask } from "./app.js";

// Missing: proper DOM selectors
function setupEventListeners() {
    // Wrong selector method
    const addButton = document.querySelector(".add-task-btn");  // Wrong - mixing ID and class
    const taskInput = document.querySelector("#task-input");  // Missing #
    
    // Check that elements exist before aading listeners
    if (addButton){
        addButton.addEventListener("click", handleAddTask);
    }
    
    // Event listeners

    document.addEventListener("DOMContentLoaded", setupEventListeners);

    if (taskInput) {
        taskInput.addEventListener("keypress", handleAddTask);
    }

    const titleInput = document.getElementById("title");
    if (titleInput) {
        titleInput.addEventListener("input", () => {});
    }

    const descriptionInput = document.getElementById("description");
    if (descriptionInput) {
        descriptionInput.addEventListener("input", () => {});
    }
}

// Function with DOM manipulation errors
// Prevent the form from reloading the page
function handleAddTask() {
    const titleInput = document.getElementById("title");
    const descInput = document.getElementById("description");
    const priorityInput = document.getElementById("priority");
    
    // No validation
    // Should use event.preventDefault() if form
    
    var title = titleInput.value;
    var description = descInput.value;
    
    // Missing: priority input
    
    addTask(title, description, 1);
    displayTasks();
    
    // Missing: clear inputs after adding
}

// Function that should use better selectors
function displayTasks() {
    var container = document.getElementById("task-list");
    
    // Should clear existing content first
    // Missing: null check
    
    // Inefficient - should use template literals and insertAdjacentHTML
    for (var i = 0; i < taskList.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = "<h3>" + taskList[i].title + "</h3>";
        div.innerHTML = div.innerHTML + "<p>" + taskList[i].description + "</p>";
        container.appendChild(div);
        
        // Missing: task ID, completion status, event handlers for delete/complete
    }
}

// Function with event handling issues
function handleTaskClick(event) {
    // Missing: event.target check
    // Missing: proper event delegation
    
    var taskId = event.target.id;  // Wrong way to get task ID
    
    // Should toggle task completion
    console.log("Task clicked: " + taskId);
}

// Missing: JSON conversion functions
// Missing: functions to save/load tasks from localStorage

// Initialize (wrong placement - should use DOMContentLoaded)
setupEventListeners();
