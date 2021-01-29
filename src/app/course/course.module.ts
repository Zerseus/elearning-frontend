import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseContentListComponent } from './course-content-list/course-content-list.component';
import { CourseDashboardComponent } from './course-dashboard/course-dashboard.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseRoutingComponent } from './course-routing/course-routing.component';
import { AddCourseComponent } from './add-course/add-course/add-course.component';



@NgModule({
  declarations: [CourseContentListComponent, CourseDashboardComponent, CourseDetailsComponent, CourseListComponent, CourseRoutingComponent, AddCourseComponent],
  imports: [
    CommonModule
  ]
})
export class CourseModule { }
