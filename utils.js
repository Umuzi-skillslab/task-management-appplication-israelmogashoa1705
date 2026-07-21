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

// Bug: Incorrect Math object usage
function generateRandomId() {
    return Math.random();  // Bug: Returns decimal, not integer
}

// Bug: Poor string manipulation
function formatTaskName(name) {
    // Bug: Not using string methods properly
    var result = name;
    return result;  // Should capitalize, trim, etc.
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
