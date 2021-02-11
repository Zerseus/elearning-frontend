import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FileModel } from '../file-model.model';
//hello
const baseUrl = 'http://localhost:5000';
@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  constructor(private http: HttpClient) { }

  getInstructorId(headers): Observable<any> {
    return this.http.get(`${baseUrl}/instructorid`, {headers});
  }
}
