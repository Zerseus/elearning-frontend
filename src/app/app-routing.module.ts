import {Input, NgModule} from '@angular/core';
import {Routes, RouterModule} from "@angular/router";

import {HomeComponent} from "./home/home.component";
import {RestApiComponent} from "./restapi/restapi.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";

import {InstructorDashboardComponent} from './instructor/instructor-dashboard/instructor-dashboard.component';
import {InstructorDetailsComponent} from './instructor/instructor-details/instructor-details.component';
import {InstructorUpdateDetailsComponent} from './instructor/instructor-update-details/instructor-update-details.component';

import {StudentDashboardComponent} from './student/student-dashboard/student-dashboard.component';
import {StudentUpdateDetailsComponent} from './student/student-update-details/student-update-details.component';
import { StudentDetailsComponent } from './student/student-details/student-details.component';

import {CourseDetailsComponent} from './course/course-details/course-details.component';
import {CourseContentListComponent} from './course/course-content-list/course-content-list.component';
import {CourseDashboardComponent} from './course/course-dashboard/course-dashboard.component';
import {CourseListComponent} from './course/course-list/course-list.component';
import { AddCourseComponent } from './course/add-course/add-course.component';

import {ContactComponent} from './header/contact/contact.component';
import {AboutusComponent} from './header/aboutus/aboutus.component';


import { InstructorGuard } from './shared/instructorguard.service';
import { StudentGuard } from './shared/studentguard.service';
import { ReverseGuard } from './shared/reverseguard.service';
import { BothGuard } from './shared/bothguard.service';

import {DefaultComponent} from './layouts/default/default.component';
import { SearchComponent } from './search/search.component';
import { BothComponent } from './both/both.component';
import { CourseContentListDashboardComponent } from './course/course-content-list-dashboard/course-content-list-dashboard.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'student', component: DefaultComponent, children: [
    {
      path:'student-dashboard',
      component: StudentDashboardComponent
    },
    {
      path:'student-details',
      component: StudentDetailsComponent
    },
    {
      path:'student-update-details',
      component: StudentUpdateDetailsComponent
    },
    {
      path:'search',
      component: SearchComponent
    },
  ], canActivate: [StudentGuard]},  
  {path: 'instructor', component: InstructorDashboardComponent, children: [
    {
      path:'instructor-details',
      component: InstructorDetailsComponent
    },
    {
      path:'instructor-update-details',
      component: InstructorUpdateDetailsComponent
    },
    {
      path:'search',
      component: SearchComponent
    },
    {
      path: 'add',
      component: AddCourseComponent
    },
    {
      path:'courses/:id',
      component: CourseDetailsComponent
    },
    {
      path:'courses',
      component: CourseListComponent
    }
  ], canActivate: [InstructorGuard]},  
  {path: 'login', component: LoginComponent, canActivate: [ReverseGuard]},
  {path: 'register', component: RegisterComponent, canActivate: [ReverseGuard]},
  {path: 'choice', component: BothComponent, canActivate: [BothGuard]},
  {path: 'restapi', component: RestApiComponent },
  {
    path:'course-dashboard',
    component: CourseDashboardComponent
  },
  {
    path:'courses/:id',
    component: CourseContentListComponent, 
    // children:[
    //   {
    //     path:'chapters',
    //     component: CourseContentListDashboardComponent
    //   }
    // ]
  },
   {
     path:'courses/:id/chapters',
     component: CourseContentListDashboardComponent,
   },
  {
    path:'course-content-list',
    component: CourseContentListComponent
  },
  {
    path:'aboutus',
    component: AboutusComponent
  },
  {
    path:'contact',
    component: ContactComponent
  },
  {
    path:'search',
    component: SearchComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
