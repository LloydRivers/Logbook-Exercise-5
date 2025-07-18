# CW1 Training Activity - Logbook Exercise 5

This is a Node.js application for managing tasks using object-oriented JavaScript. It allows you to add, list, complete, delete, filter, and sort tasks based on priority and due date.

---

## 🚀 How to Run the App

1. **Make sure you have Node.js installed.**  
   You can check by running:

   ```bash
   node -v
   ```

2. **Clone or download the project files.**
   You should have two files:

   - `taskManager.js` — contains the Task and TaskManager classes
   - `index.js` — the main script to run the app

3. **Open a terminal in the project folder** and run:

   ```bash
   node index.js
   ```

4. **Check the output in the terminal.**
   You'll see tasks being added, listed, marked complete, deleted, and printed in a sorted format.

---

## ✅ What I Learned

This exercise helped me build confidence using **object-oriented programming (OOP)** in JavaScript. Here's what I got out of it:

- **Class Design**: I created two classes — `Task` and `TaskManager` — to model real-world behaviour. I learned how to encapsulate data and keep responsibilities separate.

- **Working with Arrays**: I used array methods like `forEach`, `find`, `filter`, and `sort` to manage and display tasks.

- **Default Parameters**: I practiced setting default values in constructors (e.g. defaulting task priority to `"Medium"`).

- **Date Handling**: I learned how to store and format due dates using JavaScript's built-in `Date` object.

- **Sorting Logic**: I implemented multi-level sorting — first by priority, then by due date — which made me think carefully about comparison logic and edge cases (like missing due dates).

- **Modular Code Structure**: I separated my logic into two files and used `module.exports` and `require()` to keep the code clean and reusable.

Overall, this was a solid step forward in understanding how to structure code cleanly, think through real-world features, and write logic that goes beyond toy problems.

---

> This is part of the CW1 Training Logbook submission — Exercise 5.
