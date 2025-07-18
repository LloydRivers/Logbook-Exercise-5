const { TaskManager } = require("./taskManager");

// Create a new task manager
const taskManager = new TaskManager();

// Add tasks
taskManager.addTask("Buy groceries");
taskManager.addTask("Read a book");
taskManager.addTask("Write code");

// List tasks
console.log("\nAll Tasks:");
taskManager.listTasks();

// Mark a task as completed
taskManager.completeTask(1);

// Delete a task
taskManager.deleteTask(2);

// List again
console.log("\nAfter completion and deletion:");
taskManager.listTasks();

// Filter completed tasks
const completedTasks = taskManager.filterTasks((task) => task.completed);
console.log("\nCompleted Tasks:");
console.log(completedTasks);
