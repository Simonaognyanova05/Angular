import { Component } from "@angular/core";

interface Game {
    title: string,
    price: number,
}
@Component({
    selector: 'game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})

export class GameComponent {
    games: Game[] = [
        { title: 'Minecraft', price: 10 },
        { title: 'Super Mario', price: 20  },
        { title: 'Conter Strike', price: 15  },
    ]
}