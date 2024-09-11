import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-item',
  templateUrl: './pet-item.component.html',
  styleUrls: ['./pet-item.component.css']
})
export class PetItemComponent implements OnInit {
  @Input() pet: any;
  constructor() { }

  ngOnInit(): void {
  }

}
