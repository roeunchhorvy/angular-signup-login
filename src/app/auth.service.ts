// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private baseUrl = 'http://localhost:8181/auth';
  

//   constructor(private http: HttpClient) { }

//   login(username: string, password: string) {
//     return this.http.post<any>(`${this.baseUrl}/login`, { username, password }).subscribe(
//       response => {
//         console.log('Login successful:', response);
//       },
//       error => {
//         console.error('Login error:', error);
//       }
//     );;
//   }

//   signup(email: string, username: string, password: string) {
//     return this.http.post<any>(`${this.baseUrl}/signup`, { email, username, password });
//   }
// }

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

const baseUrl = 'http://localhost:8181/auth';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class AuthService{
  constructor(private http: HttpClient) {

  }

  login(username:string, password: string): Observable<any>{
    return this.http.post(baseUrl + 'signin', {
      username,
      password
    }, httpOptions);
  }

  signup(username: string, email: string, password: string): Observable<any>{
    return this.http.post(baseUrl + 'signup', {
      username,
      email,
      password
    }, httpOptions);
  }
}


