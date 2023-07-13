import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthRegister } from './interfaces/auth-register';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AuthLogin } from './interfaces/auth-login';

const URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  register(data: AuthRegister): Observable<any>{
    return this.http.post(`${URL}/auth/register`, data);
  }

  login(data: AuthLogin): Observable<any>{
    return this.http.post(`${URL}/auth/login`, data);
  }
}
