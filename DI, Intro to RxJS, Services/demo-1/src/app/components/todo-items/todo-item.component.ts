import { Component, Input } from "@angular/core";
import { TodoInter } from "../todo.component";

@Component({
    selector: 'todo-item',
    templateUrl: './todo-item.component.html'
})
export class TodoItem {
    @Input() todo: any;

    clickHandler(todoToChange: TodoInter): void {
        todoToChange.isDone = !todoToChange.isDone;
    };
}