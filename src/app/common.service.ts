import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  URL = "http://localhost:3000/studentdetails"
    constructor(private _http:HttpClient) { }
  getStudentList(){
   return this._http.get(this.URL);
  }
}
