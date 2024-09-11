import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {

  makeFontBigger: boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.makeFontBigger = false;
  }

}
