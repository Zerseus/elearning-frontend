import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:8082';

  constructor(private http: HttpClient) { }

  sendData(headers: any) {
    return this.http.post<any>(`${this.apiUrl}/user`, {title: "hello"}, { headers });
  }
}
