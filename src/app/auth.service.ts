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


