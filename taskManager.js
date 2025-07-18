class Task {
  constructor(id, description, priority = "Medium", dueDate = null) {
    this.id = id;
    this.description = description;
    this.completed = false;
    this.priority = priority;
    this.dueDate = dueDate ? new Date(dueDate) : null;
  }
}

class TaskManager {
  constructor() {
    this.tasks = [];
    this.nextId = 1;
  }

  addTask(description, priority = "Medium", dueDate = null) {
    const task = new Task(this.nextId++, description, priority, dueDate);
    this.tasks.push(task);
  }

  listTasks() {
    this.tasks.forEach((task) => {
      console.log(
        `[${task.completed ? "✓" : " "}] ${task.id}: ${task.description}`
      );
    });
  }

  completeTask(id) {
    const task = this.tasks.find((t) => t.id === id);
    if (task) {
      task.completed = true;
    }
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter((t) => t.id !== id);
  }

  filterTasks(callback) {
    return this.tasks.filter(callback);
  }
}

module.exports = { Task, TaskManager };
