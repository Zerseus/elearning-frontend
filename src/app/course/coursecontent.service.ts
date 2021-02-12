import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseContent } from './coursecontent.model';

const baseUrl = 'http://localhost:5000/courses';
@Injectable({
  providedIn: 'root'
})
export class CoursecontentService {

  constructor(private http:HttpClient) { }

  getCourseContent(course_id): Observable<CourseContent[]>{
    return this.http.get<CourseContent[]>(`${baseUrl}/${course_id}`);
  }
}
