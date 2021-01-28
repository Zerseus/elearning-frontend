import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CourseList } from './courselist.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  search(title: string) {
    return this.http.get<CourseList[]>(`${this.apiUrl}/search?q=${title}`);
  }
}
