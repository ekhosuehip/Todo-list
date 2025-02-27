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

    listTodos(): TodoItem[] {
        console.log("\n Todos🗓️");
        this.todos.forEach((todo ) => console.log(`[${todo.id} ${todo.task} ${todo.completed ? "✅ Completed" : "❌ Pending"}]`));
        return this.todos;
    }
}


const myTodos = new TodoList();


myTodos.addTodo("Learn TypeScript", new Date("2025-03-01"));
myTodos.addTodo("Build a Todo App", new Date("2025-03-05"));
myTodos.addTodo("Write documentation", new Date("2025-03-10"));

myTodos.listTodos();


myTodos.completeTodo(2);

myTodos.removeTodo(1);

myTodos.listTodos();