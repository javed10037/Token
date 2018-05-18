import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Auth } from '../interfaces/auth';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    // 'Authorization': 'my-auth-token'
  })
};
@Injectable()
export class AuthService {

  myToken : any;
  myUser : any;
  constructor(private http: HttpClient) { }
  loginUrl = 'https://www.kryptual.com:4000/api/login';

  /** POST: add a new hero to the database */
  loginConfig (auth: Auth): Observable<Auth> {
    return this.http.post<Auth>(this.loginUrl, auth, httpOptions)
  } 
  
  storeUserData(token, user) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.myToken = token;
    this.myUser = user;
  }

  logout(){
    // this.myToken = null;
    // this.myUser = null;
    // localStorage.clear();
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }
  
  loadToken() {
    const token = localStorage.getItem('token');
    this.myToken = token;
  }

  loggedIn(){
    let token = localStorage.getItem('token');
    return token;
  }


}
