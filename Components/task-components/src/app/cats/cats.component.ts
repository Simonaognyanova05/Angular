import { Component } from "@angular/core";

interface Cats {
    name: string,
    breed?: string,
    age: number,
    img: string,
}
@Component({
    selector: 'cats',
    templateUrl: './cats.component.html',
    styleUrls: ['./cats.component.css']
})

export class Cat {
    isTrue: boolean = false;

    cats: Cats[] = [
        { name: 'Maxi', breed: '', age: 1, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSzV5hbZ57XgAywew5lj-PbgvY4-WR2hmQTA&s' },
        { name: 'Mishi', breed: 'Woman', age: 3, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQre8U4qd9PSAtqTZpGnJW7u9BlUC-RqmaC5Q&s' },
    ]

    changeColorHandler(): void {
        this.isTrue = this.isTrue ? false : true;
    }
}