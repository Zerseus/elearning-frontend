
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FileModel } from '../file-model.model';
import { Course } from './course.model';
//hello
const baseUrl = 'http://localhost:5000/courses';
const baseUrl2 = 'http://localhost:5000/upload';
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  getCourseDetailsModel(): Observable<Course[]>{
    return this.http.get<Course[]>(baseUrl);
  }

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }
  
  getAllOfInstructor(id): Observable<any> {
    return this.http.get(`http://localhost:5000/${id}/courses`);
  }

  get(id): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(data, id): Observable<any> {
    console.log(data);
    return this.http.post(`${baseUrl}/${id}`, data);
  }

  update(id, data): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title): Observable<any> {
    return this.http.get(`${baseUrl}?title=${title}`);
  }

  upload(file: File): Observable<any> {
    const formData: FormData = new FormData();

 //   formData.append('json', JSON.stringify(catalogacion));

 //   for (let file of filesToUpload) {
      formData.append('file', file);
   // }

    console.log(formData.get("file"));

    let headers = new HttpHeaders();
    return this.http.post(baseUrl2, formData, { responseType: 'text' });
  }
  
}