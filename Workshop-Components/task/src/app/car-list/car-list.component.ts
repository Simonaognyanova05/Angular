import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent {
  isLogin = false;
  cars: any;

  constructor(private carService: CarsService) { }

  ngOnInit(): void {
    this.carService.getData().subscribe(response => {
      this.cars = response;
    })
  }

  loginHandler(): void {
    this.isLogin = true;
  }
  logoutHandler(): void {
    this.isLogin = false;
  }
}
