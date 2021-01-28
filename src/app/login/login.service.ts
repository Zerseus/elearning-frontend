import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'https://ewqjz0p5p1.execute-api.us-east-1.amazonaws.com/prod';

  constructor(private http: HttpClient) { }

  

  sendData(headers: any) {
    return this.http.post(`${this.apiUrl}/user`, {title: "hello"}, { headers, responseType: "text" });
  }
}
