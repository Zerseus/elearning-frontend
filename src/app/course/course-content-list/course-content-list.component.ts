import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-content-list',
  templateUrl: './course-content-list.component.html',
  styleUrls: ['./course-content-list.component.css']
})
export class CourseContentListComponent implements OnInit {
  
  @Input() id:number;
  courses: Course[];

  constructor(private courseService:CourseService) { }

  ngOnInit(): void {
    this.courseService.get(this.id).subscribe((data: Course[])=>{
    console.log(data);
    this.courses=data;
  })
  }

}
