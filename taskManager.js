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

  presentTasks() {
    const sortedTasks = [...this.tasks].sort((a, b) => {
      // Sort by priority first
      const priorities = { High: 1, Medium: 2, Low: 3 };
      const priorityComparison =
        priorities[a.priority] - priorities[b.priority];

      if (priorityComparison !== 0) return priorityComparison;

      // Then sort by due date (earlier comes first)
      if (a.dueDate && b.dueDate) {
        return new Date(a.dueDate) - new Date(b.dueDate);
      } else if (a.dueDate) {
        return -1;
      } else if (b.dueDate) {
        return 1;
      }

      return 0;
    });

    sortedTasks.forEach((task) => {
      console.log(
        `[${task.completed ? "✓" : " "}] ${task.id}: ${
          task.description
        } | Priority: ${task.priority} | Due: ${
          task.dueDate ? task.dueDate.toLocaleDateString() : "N/A"
        }`
      );
    });
  }
}

module.exports = { Task, TaskManager };
