import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseContentListComponent } from './course-content-list/course-content-list.component';
import { CourseDashboardComponent } from './course-dashboard/course-dashboard.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseRoutingComponent } from './course-routing/course-routing.component';
import { AddCourseComponent } from './add-course/add-course/add-course.component';
import { AddCourseContentComponent } from './add-course-content/add-course-content.component';
import {FileUploadModule} from 'primeng/fileupload';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [CourseContentListComponent, CourseDashboardComponent, CourseDetailsComponent, CourseListComponent, CourseRoutingComponent, AddCourseComponent, AddCourseContentComponent],
  imports: [
    CommonModule,
    FileUploadModule,
    MatIconModule
  ]
})
export class CourseModule { }
