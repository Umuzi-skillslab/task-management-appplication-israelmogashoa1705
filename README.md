[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=24119526&assignment_repo_type=AssignmentRepo)

# Task Management Application

## Overview

The Task Management Application is a JavaScript-based task tracking system that allows users to create tasks, view task details, manage priorities, and store task information. The project was completed by debugging and improving an incomplete starter codebase using modern JavaScript concepts, object-oriented programming, DOM manipulation, ES6 modules, and Jest testing.

## Errors Found

The original project contained errors across several areas:

* Variables were incorrectly declared or missing declarations.
* Incorrect comparison and assignment operators were used.
* Loops contained logic issues and needed improvements.
* Functions were missing parameters, validation, and proper return handling.
* Classes had inheritance issues, including a missing `super()` call.
* The Task class was missing a completion toggle method.
* Modern JavaScript features such as destructuring, template literals, and spread operators were missing.
* DOM selectors and event handling contained errors.
* Local storage functions were incomplete.
* Tests were incomplete and required additional coverage.
* Error handling and validation were missing in several areas.

## Fixes Implemented

The application was improved by:

* Replacing incorrect variable declarations with `let` and `const`.
* Correcting operators and improving conditional logic.
* Adding validation and error handling using try-catch blocks.
* Fixing loops and implementing appropriate array methods.
* Completing the Task and SubTask classes with proper inheritance.
* Adding the `toggleCompletion()` method.
* Implementing ES6 features including destructuring, template literals, spread operators, and modules.
* Improving DOM selectors, event listeners, and event delegation.
* Adding JSON conversion and localStorage functionality.
* Expanding Jest tests to cover classes, functions, edge cases, and error handling.

## Features

The application includes:

* Creating tasks with titles, descriptions, and priorities.
* Displaying tasks dynamically in the browser.
* Tracking completion status.
* Managing task data using JavaScript classes.
* Saving and loading tasks using localStorage.
* Automated testing using Jest.

## How to Run the Application

1. Download or clone the project repository.
2. Open the project folder in Visual Studio Code.
3. Install dependencies:

```bash
npm install
```

4. Start a local server.

Recommended method:

* Install the Live Server extension in VS Code.
* Right-click `index.html`.
* Select **Open with Live Server**.

The application will open in your browser, usually at:

```
http://127.0.0.1:5500/index.html
```

Do not open `index.html` by double-clicking the file because ES6 modules require a local server.

## How to Run Tests

Run:

```bash
npm test
```