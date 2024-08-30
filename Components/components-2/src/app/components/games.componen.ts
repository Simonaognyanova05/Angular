import { Component } from "@angular/core";

interface Game {
    title: string,
    price: number,
    img: string
}
@Component({
    selector: 'game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})

export class GameComponent {
    isTrue: boolean = false;

    games: Game[] = [
        { title: 'Minecraft', price: 10, img: '' },
        { title: 'Super Mario', price: 20, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbpoC6b7Pevx4nu9xqt_Xr4hsBYvyfXDyRlw&s' },
        { title: 'Conter Strike', price: 15, img: '' },
    ];

    clickHandler(): void {
        this.isTrue = this.isTrue ? false : true;
    }
}