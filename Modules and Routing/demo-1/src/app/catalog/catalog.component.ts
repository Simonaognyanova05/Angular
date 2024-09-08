import { Component, OnInit } from '@angular/core';
import { CatalogService } from './catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  cars: any;
  constructor(private catalogService: CatalogService) { }

  ngOnInit(): void {
    this.catalogService.getData().subscribe(res => this.cars = res);
  }

}
