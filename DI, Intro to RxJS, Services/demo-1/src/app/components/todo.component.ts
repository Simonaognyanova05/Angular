import { Component } from "@angular/core";


interface TodoInter{
    title: string,
    isDone: boolean,
}
@Component({
    selector: 'todo',
    templateUrl: './todo.component.html'
})

export class Todo{
    isDone: boolean = false;

    todos: TodoInter[] = [
        {title: 'Go to shop', isDone: false},
        {title: 'Learn Angular', isDone: true},
        {title: 'Write new English words', isDone: false},
    ];

    clickHandler(todoToChange: TodoInter): void{
        todoToChange.isDone = !todoToChange.isDone;
    }
}