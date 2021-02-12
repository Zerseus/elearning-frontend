import { Component, OnInit } from '@angular/core';
import { Instructor } from 'src/app/instructor/instructor.model';
import { InstructorService } from 'src/app/instructor/instructor.service';
import { AuthorizationService } from 'src/app/shared/authorization.service';
import { Course } from '../course.model';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses?: Course[];
  currentCourse?: Course;
  currentIndex = -1;
  title = '';

  token: any;

  instructor: Instructor;

  constructor(private auth: AuthorizationService, private courseService: CourseService, private instructorService: InstructorService) { }

  ngOnInit(): void {
    this.generateToken();
    this.retrieveCourses();
  }

  retrieveCourses(): void {
 //   console.log(this.token);
    const headers = { 'Authorization' : this.token };  
 //   console.log(headers);

    this.instructorService.getInstructorId(headers)
      .subscribe(
        (response: Instructor) => {
      //    console.log(response);
          this.instructor = JSON.parse(JSON.stringify(response));
      //    console.log(this.instructor.id);
      //    console.log(this.instructor.course);
          this.courses = this.instructor.course;
      /*    this.courseService.getAllOfInstructor(this.instructor.id)
            .subscribe(
              data => {
                this.courses = data;
                console.log(data);
              },
              error => {
                console.log(error);
              }); */
            });
  }

  refreshList(): void {
    this.retrieveCourses();
    this.currentCourse = undefined;
    this.currentIndex = -1;
  }

  setActiveCourse(course: Course, index: number): void {
    this.currentCourse = course;
    this.currentIndex = index;
  }

  removeAllCourses(): void {
    this.courseService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle(): void {
    this.courseService.findByTitle(this.title)
      .subscribe(
        data => {
          this.courses = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
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
