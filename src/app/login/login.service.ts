import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  //private apiUrl = 'localhost:8080/user';

  private apiUrl = 'http://localhost:5000';


  constructor(private http: HttpClient) { }

  

  sendData(headers: any) {
    return this.http.post(`${this.apiUrl}/user`, {title: "hello"}, { headers, responseType: "text" });
  }
}
