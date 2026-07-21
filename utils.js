// Utilities - Starter Code (WITH ERRORS AND MISSING FEATURES)

// Stores the available priority levels
const priorities = ["low", "medium", "high"];

// Saves tasks to localStorage using JSON
function saveToStorage(data) {
    try{
        localStorage.setItem("tasks", JSON.stringify(data));
    }catch (error){
        console.error("Failed to save tasks:", error.message);
    }

}

// Loads tasks from localStorage
function loadFromStorage() {
    try {
        const data = localStorage.getItem("tasks");
        return data ? JSON.parse(data) : [];
    } catch (error){
        console.error("Failed to load tasks:", error.message);
        return [];
    }

}

// Generates a whole number ID
function generateRandomId() {
    return Math.floor(Math.random() * 1000000);
}

// Formats task names consistently.
function formatTaskName(name) {
    if (typeof name !== "string"){
        throw new TypeError("Task name must be a string.");
    }

    return name.trim().charAt(0).toUpperCase() +
           name.trim().slice(1).toLowerCase();
}

// Return true when a task has a high priority.
function isHighPriority(task) {

    if (!task || typeof task.priority === "undefined") {  // Bug: Using ==
        return false;
    }
    return task.priority >= 3;
}

// Export utilities.
export {
    priorities,
    saveToStorage,
    loadFromStorage,
    generateRandomId,
    formatTaskName,
    isHighPriority
};