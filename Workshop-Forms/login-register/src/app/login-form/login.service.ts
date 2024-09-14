import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = 'http://localhost:3030/users/login';
  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.httpClient.post<any>(this.url, body);
  }
}
