// Task Management Application - Starter Code with Errors

// Global variables (scoping issues)
//Fixed
const taskList = [];  // Missing var/let/const
let taskCounter = 0;  // Should use let or const

// Task class with errors
class Task {
    constructor(id, title, description, priority) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.completed = false;
        // Missing: id property
        // Fixed
    };

    // Missing: method to toggle completion
    // Fixed
    toggleCompletion(){
        this.completed = !this.completed;
    }
    
    getInfo() {
        // Wrong string concatenation - should use template literals
        //Fixed
        return `Task: ${this.title} - Priority: ${this.priority}`;
    }
}

// Subtask class with inheritance issues
class SubTask extends Task {
    constructor(id, title, description, priority, parentTask) {
        // Missing: super() call
        // Fixed
        super(id, title, description, priority);
        this.parentTask = parentTask;
    }
}

// Functions with errors

// Function with no error handling
function addTask(title, description, priority) {
    try{
        if(!title){
            throw new Error("Title is required");
        }
        
        const newTask = new Task(taskCounter, title, description, priority);

        if (!Array.isArray(taskList)) {
            throw new Error("Task list is not initialized");
        }

        taskList.push(newTask);
        taskCounter++;

        return newTask;

    } catch (error) {
        console.error("Failed to add task:", error.message);
        return null;
    }
}

// Function with incorrect loop
function displayAllTasks() {
    // Wrong loop - should use for-of
    for (const task of taskList) {  // Off-by-one error
        console.log(task.title);
        //fixed
    }
}

// Function missing parameter
// Fixed
function findTaskByTitle(title) {
    // Missing: title parameter
    // Wrong loop construct
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].title === title) {  // Should use ===
            return taskList[i];
        }
    }

    return undefined;
};

// Function with type checking issues
function updateTaskPriority(taskId, newPriority) {
    // null or undefined validation
    if (taskId === null || taskId === undefined){
        throw new Error("taskId is required");
    }

    if (newPriority === null || newPriority === undefined){
        throw new Error("newPriority is required");
    }

    // type checking
    if (typeof taskId !=='number'){
        throw new TypeError("taskId must be a number");
    }

    if (typeof newPriority !=='number'){
        throw new TypeError("newPriority must be a string");
    }
    // Missing: typeof check for parameters
    // Missing: null/undefined validation

    //validate tasklist
    if (!Array.isArray(taskList)){
        throw new Error("tasklist is not initialised");
    }
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].id === taskId) {  // Wrong operator (= instead of ===)
            taskList[i].priority = newPriority;
            return true;
        }
    }
    return false;
}

// Function that should use destructuring but doesn't
function getTaskDetails(task) {
    // Should destructure task properties
    // fixed
    const {title, description, priority, completed} = task;

    return {
        title: title,
        description: description,
        priority: priority,
        completed: completed
    };
}

// Function missing spread/rest operators
function mergeTasks(list1, list2) {
    // Should use spread operator
    //fixed
    return [...list1, ...list2];
}

// Recursive function with error
function countCompletedTasks(tasks, index = 0) {

    // Missing: null/undefined check
    if (!Array.isArray(tasks)){
        return 0;
    }
    
    // base case
    if (index >= tasks.length){
        return 0;
    }

    // recursive part
    if (tasks[index].completed) {
        return 1 + countCompletedTasks(tasks, index + 1);
    } else {
        return countCompletedTasks(tasks, index + 1);
    }
}

// Function with Math object issues
function calculateAveragePriority() {
    // Missing: check for empty array
    if (!taskList || taskList.length === 0){
        return 0;
    }

    let total = 0;
    for (let i = 0; i < taskList.length; i++) {
        total = total + taskList[i].priority;
    }
    // Should use Math.round or toFixed
    return Math.round(total / taskList.length);
}

// Object with missing methods
const TaskManager = {
    tasks: taskList,
    // Missing: method to add task using functional approach
    addTask(task){
        this.tasks = [...this.tasks, task];
    },

    getTaskTitles(){
        return this.tasks.map(task => task.title);
    },

    getCompletedTasks(){
        return this.tasks.filter(task => task.completed);
    },

    getAveragePriority(){
        if (this.tasks.length ===0) return 0;

        const total = this.tasks.reduce((sum, task) => sum + task.priority, 0);

        return Math.round(total /this.tasks.length);
    },
 
    getTotalTasks(){
        return this.tasks.length;
    }
};

// Export issues - should be a module
// Missing: proper module exports
export {
    taskList,
    Task,
    SubTask,
    addTask,
    displayAllTasks,
    findTaskByTitle,
    updateTaskPriority,
    getTaskDetails,
    mergeTasks,
    countCompletedTasks,
    calculateAveragePriority,
    TaskManager
};
