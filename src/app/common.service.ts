import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { StudentDetailsComponent } from './student/student-details/student-details.component';
import {Studentdetails} from './studentdetails.model';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CommonService {
  API='http://localhost:5050/student';
  constructor(private http:HttpClient){}
 
  public studentregister(studentData){

    return this. http.post(this.API ,studentData);
  }
  public getStudents(){
    return this.http.get(this.API );
  }

  public update(students){
    return this.http.get(this.API ,students);
  }

  public delete(studentid){
    return this.http.delete(this.API+ '/studentid=' +studentid);
  }

}
