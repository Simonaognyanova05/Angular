import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private url = 'http://localhost:3030/users/register';
  constructor(private httpClient: HttpClient) { };

  login(email: string, password: string): Observable<any>{
    return this.httpClient.post(this.url, {email, password});
  }
}
