import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../../catalog.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  details: any;

  constructor(private catalogService: CatalogService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    
    this.catalogService.getSpecificData(id).subscribe(res => this.details = res);
  }

}
