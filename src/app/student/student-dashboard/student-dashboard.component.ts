import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/course';
import { CourseService } from 'src/app/course/course.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {
  courses: Course[];
  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getCourseDetailsModel().subscribe((data: Course[])=>{
      console.log(data);
      this.courses=data;
    });
  }

}
