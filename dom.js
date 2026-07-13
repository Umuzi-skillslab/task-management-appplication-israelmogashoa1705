// Imports the function used to add tasks and the shared task list
import { addTask, taskList } from "./app.js";

// Adds all required event listeners after the page has loaded.
function setupEventListeners() {

    // Selects the Add Task button and the title input field.
    const addButton = document.querySelector(".add-task-btn");  // Wrong - mixing ID and class
    const taskInput = document.querySelector("#title");  // Missing #
    
    // Adds a click event listener if the button exists.
    if (addButton){
        addButton.addEventListener("click", handleAddTask);
    }
    
    // Allows the Enter key to submit a new task.
    if (taskInput) {
        taskInput.addEventListener("keypress", (event) => {
            if (event.key === "Enter"){
                handleAddTask(event);
            }
        });
    }

}

// Reads user input, creates a task, updates the display and saves the data.
function handleAddTask(event) {

    // Prevents the page from refreshing when the button is clicked.
    if (event) {
        event.preventDefault();
    }

    // Retrieves all required input fields.
    const titleInput = document.getElementById("title");
    const descInput = document.getElementById("description");
    const priorityInput = document.getElementById("priority");
    
    // Stops execution if any required element cannot be found.
    if (!titleInput || !descInput || !priorityInput){
        return;
    }
    
    // Reads values entered by the user.
    const title = titleInput.value;
    const description = descInput.value;
    const priority = Number(priorityInput.value);
    
    // Adds the task and refreshes the interface.
    addTask(title, description, priority);
    saveTasks();
    displayTasks();
    updateStatistics();


    
    // Clears the form so another task can be entered.
    titleInput.value = "";
    descInput.value = "";
    priorityInput.value = "";
}

// Updates the statistics displayed on the page.
function updateStatistics() {
    const totalTasks = document.getElementById("total-tasks");
    const completedTasks = document.getElementById("completed-tasks");
    const averagePriority = document.getElementById("average-priority");

    // Stops execution if any statistics element is missing.
    if (!totalTasks || !completedTasks || !averagePriority) {
        return;
    }

    // Counts the number of completed tasks.
    const completed = taskList.filter(task => task.completed).length;

    // Calculates the average task priority.
    const average = taskList.length > 0
        ? Math.round(
            taskList.reduce((sum, task) => sum + task.priority, 0) / taskList.length
          )
        : 0;

    // Updates the values displayed on the page.
    totalTasks.textContent = taskList.length;
    completedTasks.textContent = completed;
    averagePriority.textContent = average;
}

// Displays every task stored in the task list.
function displayTasks() {
    const container = document.getElementById("task-list");

    // Stops execution if the container cannot be found.
    if (!container){
        return;
    }

    // Clears previously displayed tasks before re-rendering.
    container.innerHTML = "";
    
    // Creates a visual card for each task.
    for (let i = 0; i < taskList.length; i++) {
        const div = document.createElement("div");
        div.classList.add("task");
        div.dataset.id = taskList[i].id;

        // Uses template literals to display task information.
        div.innerHTML = `
        <h3>${taskList[i].title}</h3>
        <p>${taskList[i].description}</p>
        <p>Priority: ${taskList[i].priority}</p>
        <p>Completed: ${taskList[i].completed}</p>
        `;

        container.appendChild(div);
    }
}

//Uses event delegation to detect clicks on task cards.
function handleTaskClick(event) {
    //Ensures the click originated from a valid element.
    if (!event.target){
        return;
    }

    const taskElement = event.target.closest(".task");
    if (!taskElement){
        return;
    }

    const taskId = Number(taskElement.dataset.id);

    // Find the clicked task in the task list.
    const selectedTask = taskList.find(
        task => task.id === taskId
    );

    if (!selectedTask) {
        return;
    }

    // Toggle completion status when the task is clicked.
    selectedTask.toggleCompletion();

    saveTasks();
    displayTasks();
    updateStatistics();
}

//Saves all tasks in localStorage using JSON format.
function saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(taskList));
}

// Loads saved tasks from localStorage when the application starts.
function loadTasks(){
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks){
        taskList.length = 0;
        taskList.push(...JSON.parse(savedTasks));
        displayTasks();
        updateStatistics();
    }
}

// Waits until the page is fully loaded before accessing DOM elements.
document.addEventListener("DOMContentLoaded", () =>{
    setupEventListeners();
    const container = document.getElementById("task-list");

    // Adds a delegated click event to the task container.
    if (container) {
        container.addEventListener("click", handleTaskClick);
    }

    // Restores saved data and updates the interface.
    loadTasks();
    updateStatistics();
});
