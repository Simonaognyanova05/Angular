import { Component } from "@angular/core";

export interface Todos {
    title: string,
    isDone: boolean
}

@Component({
    selector: 'todo-list',
    templateUrl: './todo.component.html',
})

export class TodoComponent {
    isDone: boolean = false;

    todos: Todos[] = [
        { title: 'Learn English words', isDone: true },
        { title: 'Do Angular Tasks', isDone: true },
        { title: 'Go to shopping', isDone: false },
    ];

    changeDone(): void {
        for (let todo of this.todos) {
            todo.isDone = true;
        }
    };
    markAll(): void {
        for (let todo of this.todos) {
            todo.isDone = false;
        }
    }
}