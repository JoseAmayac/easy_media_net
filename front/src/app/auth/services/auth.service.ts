import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthRegister } from '../interfaces/auth-register';
import { environment } from 'src/environments/environment';
import { Observable, tap } from 'rxjs';
import { AuthLogin } from '../interfaces/auth-login';
import { AuthResponse } from '../interfaces/auth-response';
import { User } from '../interfaces/user';

const URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _token?: string;
  private _user?: User;

  constructor(private http: HttpClient) { }

  register(data: AuthRegister): Observable<AuthResponse>{
    return this.http.post<AuthResponse>(`${URL}/auth/register`, data).pipe(
      tap((resp: AuthResponse) => this.authenticate( resp ))
    );
  }

  login(data: AuthLogin): Observable<AuthResponse>{
    return this.http.post<AuthResponse>(`${URL}/auth/login`, data).pipe(
      tap((resp: AuthResponse) => this.authenticate( resp ))
    );
  }

  private authenticate(response: AuthResponse): void{
    const { accessToken, user } = response;
    this.setToken( accessToken );
    this.setUser( user );
  }

  private setToken( token: string ){
    localStorage.setItem('token', token); // store the JWT in local storage
    this._token = token;
  }

  private setUser(user: User){
    this._user = user;
  }

  public isAuthenticated(): Promise<boolean> {
    const token = this.getToken();
    if ( !token ) return Promise.resolve( false );

    return new Promise<boolean>((resolve, reject) => {
      this.me().subscribe({
        next: ( _: AuthResponse ) => resolve( true  ),
        error: ( err ) => resolve( false )
      });
    });
  }

  public me(): Observable<AuthResponse> {
    return this.http.get<AuthResponse>(`${URL}/auth/me`).pipe(
      tap((resp: AuthResponse) => this.authenticate( resp ))
    );
  }

  public getToken(): string|null{
    if ( this._token) return this._token;

    return localStorage.getItem('token') || null;
  }

  public get user(): User|undefined{
    return this._user;
  }

  logout(): void{
    localStorage.removeItem('token');
    this._token = undefined;
    this._user = undefined;
  }
}
