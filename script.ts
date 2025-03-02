interface TodoItem {
    id: number;
    task: string;
    completed: boolean;
}

interface completeTodoItem extends TodoItem {
    dueDate: Date;
}

class TodoList {
    private todos: completeTodoItem[] = [];
    private nextId: number = 1;

    addTodo(task: string, dueDate: Date):void {
        const newTodo: completeTodoItem = {
            id: this.nextId++,
            task,
            completed: false,
            dueDate,
        };
        this.todos.push(newTodo);
        console.log(`✅ Added: "${task}" (Due: ${dueDate.toDateString()})`);
    }

    completeTodo(id: number): void {
        const todo = this.todos.find((t) => t.id === id);
        if (todo) {
            todo.completed = true;
            console.log(`Task ${todo.task} completed. ✔️`);
        } else {
            console.log(`Task with ID ${id} not found. ❌`);
        }
    }

    removeTodo(id: number): void {
        const index = this.todos.findIndex((t) => t.id === id);
        if (index !== -1) {
            const removedTasked = this.todos.splice(index, 1)[0];
            console.log(`Task ${removedTasked.task} removed. 🗑️`);
        } else {
            console.log(`TodoItem with ${id} not found. ❌`)
        }
    }

    listTodos(): completeTodoItem[] {
        console.log("\n Todos🗓️");
        this.todos.forEach((todo ) => console.log(`[${todo.id} ${todo.task} ${todo.completed ? "✅ Completed" : "❌ Pending"}]`));
        return this.todos;
    }

    filterTodos(complted: boolean): TodoItem[] {
        return this.todos.filter((todo) => todo.completed === complted)
    }

    updateDescription(id: number, description: string): void {
        const taskToUpdate = this.todos.find((todo) => todo.id === id)
        if (taskToUpdate){
            taskToUpdate.task = description
            console.log('✅ Task updated');   
        } else {
            console.log(`TodoItem with ${id} not found. ❌`)
        }
    }

    clearCompleted(): void {
        this.todos = this.todos.filter(todo => !todo.completed);
        console.log("✅ Cleared all completed tasks.");
      }
}


// Create a new todo list instance
const myTodoList = new TodoList();

// Add some tasks
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
