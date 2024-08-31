import { Component, Input } from "@angular/core";

@Component({
    selector: 'game-item',
    templateUrl: './game-item.component.html'
})
export class GameItemComponent {
    @Input() game: any;
}