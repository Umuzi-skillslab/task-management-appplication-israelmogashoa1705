// Utilities - Starter Code (WITH ERRORS AND MISSING FEATURES)

// Bug: Not using proper data structures
var priorities = ["low", "medium", "high"];

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

// Bug: Incorrect boolean logic
function isHighPriority(task) {
    if (task.priority == "high") {  // Bug: Using ==
        return "yes";  // Bug: Should return boolean
    }
    return "no";
}

// Missing: Class definitions
// Missing: Inheritance example
// Missing: Module exports
// Missing: Proper use of operators (logical, comparison)
// Missing: Recursion
// Missing: Functional programming patterns
// Missing: Proper scope demonstration
