import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../course.model';
@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  currentCourse : Course = {
    course_Title : '',
    course_Description: '',
    published: false,
    course_Rating: 3,
    What_you_Learn: '',
    Course_Requirement: '',
    image_Url: '',
  };
  message = '';

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getCourse(this.route.snapshot.params.id);
  }

  getCourse(id: string): void {
    this.courseService.get(id)
      .subscribe(
        data => {
          this.currentCourse = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status: boolean): void {
    const data = {
      title: this.currentCourse.course_Title,
      description: this.currentCourse.course_Description,
      published: status
    };

    this.courseService.update(this.currentCourse.id, data)
      .subscribe(
        response => {
          this.currentCourse.published = status;
          console.log(response);
          this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }

  updateCourse(): void {
    this.courseService.update(this.currentCourse.id, this.currentCourse)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }

  deleteCourse(): void {
    this.courseService.delete(this.currentCourse.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/instructor/courses']);
        },
        error => {
          console.log(error);
        });
  }

}
