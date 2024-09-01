import { Component, Input } from "@angular/core";

@Component({
    selector: 'cat-item',
    templateUrl: './cat-item.component.html'
})

export class CatItem{
    @Input() cat: any;
}