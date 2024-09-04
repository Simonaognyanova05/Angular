import { Component, Input } from "@angular/core";
import { Todos } from "../todo.component";

@Component({
    selector: 'todo-item',
    templateUrl: './todo-item.component.html'
})

export class TodoItem {
    @Input() todo: any;

    changeDone(todoChange: Todos): void {
        todoChange.isDone = !todoChange.isDone;
    }
}