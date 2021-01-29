import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CourseList } from './courselist.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private apiUrl = 'http://elearning-course-operations-env.eba-f3pxw4vs.us-east-1.elasticbeanstalk.com';

  constructor(private http: HttpClient) { }

  search(title: string) {
    return this.http.get<CourseList[]>(`${this.apiUrl}/search?q=${title}`);
  }
}
