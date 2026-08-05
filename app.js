// Task Management Application - Starter Code with Errors

// Stores all tasks created while the application is running.
const taskList = [];

// Generates unique IDs for newly created tasks.
let taskCounter = 0;

// Represents a task object containing task information and behaviour
class Task {
    constructor(id, title, description, priority) {
        
        // Each task receives an ID so it can be found and updated later.
        this.id = id;
        this.title = title;
        this.description = description;
        this.priority = priority;

        //New tasks are incomplete by default.
        this.completed = false;
        
    };

    // Changes the completion status between completed and incomplete.
    toggleCompletion(){
        this.completed = !this.completed;
    }

    // Updates the priority of a task.
    updatePriority(newPriority){

        if (typeof newPriority !== "number" || newPriority < 1 || newPriority > 3){
            throw new Error("Invalid priority");
        }

        this.priority = newPriority;
    }

    // Returns a formatted summary of the task using a template literal.
    getInfo() {
        
        return `Task: ${this.title} - Priority: ${this.priority}`;
    }
}

// Demonstrates inheritance by extending the Task class.
class SubTask extends Task {
    constructor(id, title, description, priority, parentTask) {
        
        // Calls the parent class constructor before adding new properties.
        super(id, title, description, priority);
        this.parentTask = parentTask;
    }
}


// Creates a new task after validating the provided information.
function addTask(title, description, priority) {
    try{
        // Prevents empty task titles from being added.
        if (!title) {
            throw new Error("Title is required");
        }

        if (typeof priority !== "number" || priority < 1 || priority > 3) {
            throw new Error("Priority must be between 1 and 3.");
        }
        
        const newTask = new Task(taskCounter, title, description, priority);
        // Ensures taskList is correctly initialised before adding data.
        if (!Array.isArray(taskList)) {
            throw new Error("taskList is not initialised");
        }

        taskList.push(newTask);
        taskCounter++;

        return newTask;

    } catch (error) {
        // Prevents invalid input from crashing the application.
        console.error("Failed to add task:", error.message);
        return null;
    }
}

// Displays every task title using a for-of loop.
function displayAllTasks() {
    
    for (const task of taskList) {  // Off-by-one error
        console.log(task.title);
        
    }
}

// Searches the task list and returns a matching task
function findTaskByTitle(title) {
    return taskList.find(task => task.title === title);
}

//Updates a task priority after validating the supplied values.
function updateTaskPriority(taskId, newPriority) {
    // null or undefined validation
    if (taskId === null || taskId === undefined){
        throw new Error("taskId is required");
    }

    if (newPriority === null || newPriority === undefined){
        throw new Error("newPriority is required");
    }

    //// Ensures correct data types are provided.
    if (typeof taskId !=='number'){
        throw new TypeError("taskId must be a number");
    }

    if (typeof newPriority !=='number'){
        throw new TypeError("newPriority must be a number");
    }

    // Confirms that the task collection exists.

    if (!Array.isArray(taskList)){
        throw new Error("taskList is not initialised");
    }

    if (newPriority < 1 || newPriority > 3){
        throw new RangeError("Priority must be between 1 and 3");
    }

    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].id === taskId) {
            taskList[i].updatePriority(newPriority);
            return true;
        }
    }
    return false;
}

// Uses object destructuring to extract task properties.
function getTaskDetails(task) {
    const {title, description, priority, completed} = task;

    return {
        title,
        description,
        priority,
        completed
    };
}

// Combines two arrays using the spread operator..
function mergeTasks(list1, list2) {
    return [...list1, ...list2];
}

// Recursively counts completed tasks in an array.
function countCompletedTasks(tasks, index = 0) {

    // Prevents errors when invalid data is supplied.
    if (!Array.isArray(tasks)){
        return 0;
    }
    
    // Stops recursion after all tasks have been checked.
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


// Calculates the average priority value of all tasks.
function calculateAveragePriority(tasks = taskList) {

    // Handles empty task collections safely.
    if (!tasks.length) {
        return 0;
    }

    const total = tasks.reduce(
        (sum, task) => sum + task.priority,
        0
    );

    return Math.round(total / tasks.length);
}

function resetTaskCounter(tasks = taskList) {

    taskCounter =
        tasks.length > 0
            ? Math.max(...tasks.map(task => task.id)) + 1
            : 0;
}

// Provides reusable methods for managing task data.
const TaskManager = {
    tasks: taskList,
     // Adds tasks
    addTask(task){
        this.tasks.push(task);
    },

    // Returns only task titles.
    getTaskTitles(){
        return this.tasks.map(task => task.title);
    },

    // Returns tasks that have been completed.
    getCompletedTasks(){
        return this.tasks.filter(task => task.completed);
    },

    // Calculates average priority using reduce()
    getAveragePriority(){
        if (this.tasks.length ===0) return 0;

        const total = this.tasks.reduce((sum, task) => sum + task.priority, 0);

        return Math.round(total /this.tasks.length);
    },
 
    // Returns the total number of tasks.
    getTotalTasks(){
        return this.tasks.length;
    }
};

// Exports functions and classes so other modules can use them.
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
    resetTaskCounter,
    TaskManager
};
