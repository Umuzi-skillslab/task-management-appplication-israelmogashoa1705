// Jest Tests - Starter Code with Errors and Missing Tests

// Missing: proper imports/requires
// fixed
import {
    Task,
    SubTask,
    addTask,
    mergeTasks,
    countCompletedTasks,
    getTaskDetails,
    TaskManager
} from "../src/app.js";

describe('Task Class', () => {
    beforeEach(() => {
        TaskManager.tasks.length = 0;
    });

    test('should create a task', () => {
        const task = new Task(1, 'Test Task', 'Description', 3);
        expect(task.title).toBe('Test Task');
        // Missing: other property checks
        expect(task.id).toBe(1);
        expect(task.description).toBe("Description");
        expect(task.priority).toBe(3);
        expect(task.completed).toBe(false);
    });
    
    // Missing: test for getInfo method
    // Missing: test for toggle completion
});

describe('Task Functions', () => {
    // Missing: beforeEach to reset taskList
    
    test('should add task', () => {
        var task = addTask('New Task', 'Test', 2);
        // Wrong assertion - should check taskList
        expect(task).toBeDefined();
    });
    
    // Missing: test for findTaskByTitle
    // Missing: test for updateTaskPriority
    // Missing: test for calculateAveragePriority
    // Missing: test for error handling
});

describe('Array Operations', () => {
    // Missing: tests for mergeTasks
    // Missing: tests for getHighPriorityTasks
    // Missing: tests for recursive function
});

// Missing: describe blocks for:
// - SubTask class and inheritance
// - Destructuring functions
// - Spread/rest operator functions
// - Module exports/imports
