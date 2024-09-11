import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetDetailsService {

  constructor(private httpClient: HttpClient) { }

  getDetails(id: string): Observable<any>{
    return this.httpClient.get(`http://localhost:3030/data/pets/${id}`);
  }
}
