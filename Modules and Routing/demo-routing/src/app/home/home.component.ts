import { Component, OnInit } from '@angular/core';
import { CarService } from './car.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cars: any;
  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.getData().subscribe(res => this.cars = res);
  }

}
