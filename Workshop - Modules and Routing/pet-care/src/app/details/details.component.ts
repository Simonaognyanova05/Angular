import { Component, OnInit } from '@angular/core';
import { PetDetailsService } from './pet-details.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  details: any;
  id!: string;
  
  constructor(private detailsService: PetDetailsService, private activeRoute: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['petId'];

    this.detailsService.getDetails(this.id).subscribe(res => this.details = res);
  }

}
