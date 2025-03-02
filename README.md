# 📌 Todo List in TypeScript

## 📖 Introduction
This is a **simple Todo List application** built using **TypeScript**. The application allows users to **add, complete, remove, update, and list todo items**. It also supports filtering tasks by their completion status and clearing completed tasks.

## 🚀 Features
✅ Add a new task with a due date
✅ Mark a task as completed
✅ Remove a task
✅ List all tasks with their status
✅ Filter tasks by completion status
✅ Update a task description
✅ Clear all completed tasks

## 🛠 Technologies Used
- **TypeScript** (For strong typing and object-oriented programming features)
- **JavaScript** (For execution in a browser or Node.js environment)

## 🏃‍♂️ How to Run the Code
### **1️⃣ Set Up the Project**
Make sure you have **Node.js** installed.
```bash
npm install -g typescript
```

### **2️⃣ Compile the TypeScript Code**
```bash
tsc filename.ts
```

### **3️⃣ Run the Compiled JavaScript Code**
```bash
node filename.js
```

## 🎯 Example Usage
```typescript
// Create a new todo list instance
const myTodoList = new TodoList();

// Add tasks
myTodoList.addTodo("Buy groceries", new Date("2025-03-01"));
myTodoList.addTodo("Complete TypeScript project", new Date("2025-03-05"));
myTodoList.addTodo("Read a book", new Date("2025-02-28"));

// List all todos
myTodoList.listTodos();

// Mark a task as completed
myTodoList.completeTodo(2);

// Filter incomplete todos
console.log("\nIncomplete Todos:", myTodoList.filterTodos(false));

// Update a task description
myTodoList.updateDescription(1, "Buy groceries and cook dinner");

// Remove a task
myTodoList.removeTodo(3);

// Clear completed todos
myTodoList.clearCompleted();

// Final list of todos
myTodoList.listTodos();
```

## 🏁 Conclusion
This **Todo List** project demonstrates **TypeScript's power** by leveraging **interfaces, classes, and strong typing**. 🎉

Feel free to **modify, enhance, or extend** this project to fit your needs! 🚀

