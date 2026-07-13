// Imports the classes and functions required to test the application logic.
import {
    taskList,
    Task,
    SubTask,
    addTask,
    mergeTasks,
    countCompletedTasks,
    getTaskDetails,
    TaskManager,
    findTaskByTitle,
    updateTaskPriority,
    calculateAveragePriority
} from "./app.js";

// Tests Task class creation and task behaviour.
describe('Task Class', () => {

    // Clears stored tasks before each test to prevent test data affecting other tests.
    beforeEach(() => {
        TaskManager.tasks.length = 0;
    });

    // Confirms a Task object stores all required properties.
    test('should create a task', () => {
        const task = new Task(1, 'Test Task', 'Description', 3);
        expect(task.title).toBe('Test Task');
        expect(task.id).toBe(1);
        expect(task.description).toBe("Description");
        expect(task.priority).toBe(3);
        expect(task.completed).toBe(false);
    });
    
    // Tests that task information is returned in the correct format.
    test("should return task info", () => {
        const task = new Task(1, "Homework", "Math", 2);

        expect(task.getInfo()).toBe("Task: Homework - Priority: 2");
    });
    
    // Ensures the completion status can be changed.
    test("should toggle completion", () => {
        const task = new Task(1, "Homework", "Math", 2);
        task.toggleCompletion();
        expect(task.completed).toBe(true);
        task.toggleCompletion();
        expect(task.completed).toBe(false);
    });
});

// Tests inheritance between SubTask and Task classes.
describe("SubTask Class", () => {
    test("should inherit from Task", () => {
        const subTask = new SubTask(
            1,
            "Sub Task",
            "Description",
            2,
            "Parent"
        );

        // Confirms SubTask receives properties from Task.
        expect(subTask instanceof Task).toBe(true);
        expect(subTask.parentTask).toBe("Parent");
    });
});

// Tests the main task management functions.
describe('Task Functions', () => {
    // Resets task data before each test.
    beforeEach(() => {
        TaskManager.tasks.length = 0;
    });

    // Checks that tasks can be searched by title.
    test("should find task by title", () => {

    const task = addTask(
        "Homework",
        "Math",
        2
    );

    expect(
        findTaskByTitle("Homework")
    ).toBe(task);

    });

    // Checks that existing tasks can have their priority updated.
    test("should update task priority", () => {

    const task = addTask(
        "Homework",
        "Math",
        2
    );

    updateTaskPriority(task.id, 5);

    expect(task.priority).toBe(5);

    });
    
    // Ensures valid tasks are successfully created.
    test('should add task', () => {
        const task = addTask('New Task', 'Test', 2);
        expect(task).not.toBeNull();
        expect(task.title).toBe("New Task");
    });
    // Tests error handling when required information is missing.
    test("should throw error with empty title", () => {

        const task = addTask("", "Test", 2);

        expect(task).toBeNull();
    });
});

// Tests array manipulation using spread operators
describe('Array Operations', () => {

        test("should merge two arrays", () => {

            const list1 = [1, 2];
            const list2 = [3, 4];

            expect(mergeTasks(list1, list2)).toEqual([1,2,3,4]);
        });

        // Tests the function with empty arrays.
        test("should merge empty arrays", () => {
            expect(mergeTasks([],[])).toEqual([]);
        });
});

// Tests recursive task counting functionality.
describe("Recursive Function", () => {

    // Confirms completed tasks are counted correctly.
    test("should count completed tasks", () => {

        const tasks = [
            {completed:true},
            {completed:false},
            {completed:true}
        ];

        expect(countCompletedTasks(tasks)).toBe(2);
    });

    // Ensures empty arrays return zero instead of causing errors.
    test("should return zero for empty array", () => {

        expect(countCompletedTasks([])).toBe(0);

    });

});

// Tests calculation of average task priority.
test("should calculate average priority", () => {

    addTask(
        "Task 1",
        "Test",
        2
    );

    addTask(
        "Task 2",
        "Test",
        4
    );

    expect(calculateAveragePriority()).toBe(3);

});

// Tests object destructuring functionality.
describe("Destructuring", () => {

    test("should return task details", () => {

        const task = new Task(
            1,
            "Assignment",
            "JavaScript",
            3
        );

        expect(getTaskDetails(task)).toEqual({
            title:"Assignment",
            description:"JavaScript",
            priority:3,
            completed:false
        });

    });

});

// Tests TaskManager object methods.
describe("TaskManager", () => {

    beforeEach(() => {
        TaskManager.tasks.length = 0;
    });

    // Checks that TaskManager can add tasks.
    test("should add task to manager", () => {

        const task = new Task(1,"Task","Desc",2);

        TaskManager.addTask(task);

        expect(TaskManager.tasks.length).toBe(1);

    });

    // Checks that task titles can be extracted using map().
    test("should return task titles", () => {

        TaskManager.tasks = [
            new Task(1,"Task 1","",1),
            new Task(2,"Task 2","",2)
        ];

        expect(TaskManager.getTaskTitles()).toEqual([
            "Task 1",
            "Task 2"
        ]);

    });

});
