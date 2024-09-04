import { Component } from "@angular/core";

interface Todos {
    title: string,
    isDone: Boolean
}

@Component({
    selector: 'todo-list',
    templateUrl: './todo.component.html',
})

export class TodoComponent {
    todos: Todos[] = [
        { title: 'Learn English words', isDone: true },
        { title: 'Do Angular Tasks', isDone: true },
        { title: 'Go to shopping', isDone: false },
    ]
}