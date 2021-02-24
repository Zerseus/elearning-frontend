import { Component, OnInit } from '@angular/core';
import { FileModel } from 'src/app/file-model.model';
import { InstructorService } from 'src/app/instructor/instructor.service';
import { AuthorizationService } from 'src/app/shared/authorization.service';
import { Course } from '../course.model';
import { Instructor } from 'src/app/instructor/instructor.model'
import { CourseService } from '../course.service';
import { Header } from 'primeng/api';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  course : Course = {
    course_Title : '',
    course_Description: '',
    published: false,
    course_Rating: 3,
    what_you_Learn: '',
    course_Requirement: '',
    image_Url: '',
  };
  submitted = false;

  uploadedFiles: any[] = [];

  token: any;

  instructor: Instructor;

  constructor(private auth: AuthorizationService, private courseService: CourseService, private instructorService: InstructorService) { }

  ngOnInit(): void {
    this.generateToken();
  }

  saveCourse(): void {
    const data = {
      course_Title: this.course.course_Title,
      course_Description: this.course.course_Description
    };

  //  console.log(this.token);
    const headers = { 'Authorization' : this.token };  
 //   console.log(headers);

    this.instructorService.getInstructorId(headers)
      .subscribe(
        (response: Instructor) => {
     //     console.log(response);
          this.instructor = JSON.parse(JSON.stringify(response));
      //    console.log(this.instructor.id);
      //    const headers2 = new Headers();
       //   headers2.append('Instructor', this.instructor);
       //   const headers2 = { 'Instructor' : this.instructor };
      //    console.log(headers2);
      //    console.log(data);
              this.courseService.create(data, this.instructor.id as number)
          .subscribe(
            response => {
          //    console.log(response);
              this.submitted = true;
            },
            error => {
              console.log(error);
            });
        },
        error => {
          console.log(error);
        });

      

    
  }

  newCourse(): void {
    this.submitted = false;
    this.course = {
      published: false,
      course_Title : '',
      course_Description: '',
      course_Rating: 3,
      what_you_Learn: '',
      course_Requirement: '',
      image_Url: '',
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

  generateInstructorId(headers): any {

    
  }

  generateToken(): any {
    this.auth.getAuthenticatedUser().getSession((err, session) => {
      if (err) {
        console.log(err);
        return;
      }
      this.token = session.getIdToken().getJwtToken();
      return;
    });
  }

  
}

