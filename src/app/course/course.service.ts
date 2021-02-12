
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FileModel } from '../file-model.model';
import { Course } from '../course';
//hello
const baseUrl = 'http://localhost:5000/courses';
//const baseUrl2 = 'http://localhost:5000/upload';
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  getCourseDetailsModel(): Observable<Course[]>{
    return this.http.get<Course[]>(baseUrl);
  }

  get(id): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data): Observable<any> {
    return this.http.post(baseUrl, data);
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
    return this.http.post(`${baseUrl}/upload`, formData, { responseType: 'text' });
  }
  
}