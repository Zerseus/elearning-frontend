import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseContentListComponent } from './course-content-list/course-content-list.component';
import { CourseDashboardComponent } from './course-dashboard/course-dashboard.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseRoutingComponent } from './course-routing/course-routing.component';



@NgModule({
  declarations: [CourseContentListComponent, CourseDashboardComponent, CourseDetailsComponent, CourseListComponent, CourseRoutingComponent],
  imports: [
    CommonModule
  ]
})
export class CourseModule { }
