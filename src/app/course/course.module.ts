import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { CourseContentListComponent } from './course-content-list/course-content-list.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseRoutingComponent } from './course-routing/course-routing.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AddCourseContentComponent } from './add-course-content/add-course-content.component';
import {FileUploadModule} from 'primeng/fileupload';
import {MatIconModule} from '@angular/material/icon';
import {ToolbarModule} from 'primeng/toolbar';
import {TabViewModule} from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import {AccordionModule} from 'primeng/accordion';
import {TableModule} from 'primeng/table';
import { CourseDashboardComponent } from './course-dashboard/course-dashboard.component';
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import {SliderModule} from 'primeng/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { CourseContentListDashboardComponent } from './course-content-list-dashboard/course-content-list-dashboard.component';

@NgModule({
  declarations: [CourseContentListComponent, 
                  CourseDetailsComponent, CourseListComponent, CourseRoutingComponent, 
                  AddCourseComponent, AddCourseContentComponent, CourseDashboardComponent, 
                  CourseDashboardComponent, CourseContentListDashboardComponent,],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FileUploadModule,
    MatIconModule,
    ToolbarModule,
    TableModule,
    AccordionModule,
    TabViewModule,
    ButtonModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    SliderModule,
    MatGridListModule
  ],
})
export class CourseModule { }
