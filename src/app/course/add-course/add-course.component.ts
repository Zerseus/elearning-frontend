import { Component, OnInit } from '@angular/core';
import { FileModel } from 'src/app/file-model.model';
import { Course } from '../course.model';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  course : Course = {
    title: '',
    description: '',
    published: false,
    url: ''
  };
  submitted = false;

  uploadedFiles: any[] = [];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
  }

  saveCourse(): void {
    const data = {
      title: this.course.title,
      description: this.course.description
    };

    this.courseService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newCourse(): void {
    this.submitted = false;
    this.course = {
      title: '',
      description: '',
      published: false
    };
  }

 /*  onUpload(event): void {
    console.log(event.files[0]);
    this.uploadedFiles = event;
    this.courseService.upload(event.files[0]).subscribe(response => {
      console.log(response);
      this.course.url = response;
    })
  } */

  uplo: File;
  onUpload(event) {
    for (let file of event.files) {
      this.uplo = file;
    }
    this.uploadFileToActivity();
  }

  uploadFileToActivity() {
    this.courseService.upload(this.uplo).subscribe((response: string) => {
      console.log(response);
      this.course.url = response;
    }, error => {
      console.log(error);
    });
  }
}

