import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseContent } from '../course-content.model';
import { Course } from '../course.model';
import { CourseService } from '../course.service';
import { CoursecontentService } from '../coursecontent.service';

@Component({
  selector: 'app-course-content-list',
  templateUrl: './course-content-list.component.html',
  styleUrls: ['./course-content-list.component.css']
})
export class CourseContentListComponent implements OnInit {
  
  id: number;
  activeIndex: number =0;
  courses: Course;
  chapters: CourseContent[];

  cols: any[];

  constructor(private courseService:CourseService,private courseContent:CoursecontentService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.courseService.get(this.route.snapshot.params.id).subscribe((data: Course)=>{
    this.courses=data;
    this.chapters=this.courses.courseContent;
    this.cols =[
      {field: 'chapter_Title',header:'Course Content'}
    ];
    //  console.log(this.chapters[this.route.snapshot.params.id]);
    //  console.log(this.courses)
  })
  // console.log(this.courses.courseContent[0].chapter_Title)
  //this.courseContent.getCourseContent(this.route.snapshot.params.id).subscribe((data: CourseContent[])=>{
   // this.chapters=data;
   // console.log(this.chapters[1].chapter_Id)})
  
  }

  btnClick() 
  {
    this.router.navigate(['/chapters']);
  }


}
