import { Component } from "@angular/core";

interface Cats{
    name: string,
    breed: string,
    age: number
}
@Component({
    selector: 'cats',
    templateUrl: './cats.component.html',
    styleUrls: ['./cats.component.css']
})

export class Cat{
    cats: Cats[] = [
        {name: 'Maxi', breed: 'Super cat', age: 1},
        {name: 'Mishi', breed: 'Woman', age: 3},
    ]
}