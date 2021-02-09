
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FileModel } from '../file-model.model';
<<<<<<< HEAD
import { Course } from '../course';

 

=======
//hello
>>>>>>> b86e17d39290420a1da0e62a8f0a1baa8bb3dcc0
const baseUrl = 'http://elearningapp-env.eba-f3pxw4vs.us-east-1.elasticbeanstalk.com/api/courses';
const baseUrl2 = 'http://localhost:5000/upload';
 

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  baseUrl3= "http://localhost:5000/courses";

  constructor(private http: HttpClient) { }

  getCourseDetailsModel(): Observable<Course[]>{
    return this.http.get<Course[]>(this.baseUrl3);
  }


  getAll(): Observable<any> {
    return this.http.get(baseUrl);
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
    return this.http.post(baseUrl2, formData, { responseType: 'text' });
  }
  
}