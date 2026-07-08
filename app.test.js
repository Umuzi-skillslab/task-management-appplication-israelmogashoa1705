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
    test("should return task info", () => {
        const task = new Task(1, "Homework", "Math", 2);

        expect(task.getInfo()).toBe("Task: Homework - Priority: 2");
    });
    // Missing: test for toggle completion
    test("should toggle completion", () => {
        const task = new Task(1, "Homework", "Math", 2);
        task.toggleCompletion();
        expect(task.completed).toBe(true);
        task.toggleCompletion();
        expect(task.completed).toBe(false);
    });
});

describe("SubeTask Class", () => {
    test("should inherit from Task", () => {
        const subTask = new SubTask(
            1,
            "Sub Task",
            "Description",
            2,
            "Parent"
        );

        expect(subTask instanceof Task).toBe(true);
        expect(subTask.parentTask).toBe("Parent");
    });
});

describe('Task Functions', () => {
    // Missing: beforeEach to reset taskList
    beforeEach(() => {
        TaskManager.tasks.length = 0;
    });
    
    test('should add task', () => {
        const task = addTask('New Task', 'Test', 2);
        // Wrong assertion - should check taskList
        expect(task).not.toBeNull();
        expect(task.title).toBe("New Task");
    });
    
    test("should throw error with empty title", () => {

        const task = addTask("", "Test", 2);

        expect(task).toBeNull();
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
