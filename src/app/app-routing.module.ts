import {Input, NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {RestApiComponent} from "./restapi/restapi.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {InstructorDashboardComponent} from './instructor/instructor-dashboard/instructor-dashboard.component';
import {InstructorDetailsComponent} from './instructor/instructor-details/instructor-details.component'
import {InstructorUpdateDetailsComponent} from './instructor/instructor-update-details/instructor-update-details.component'
import {StudentDashboardComponent} from './student/student-dashboard/student-dashboard.component';
import {StudentUpdateDetailsComponent} from './student/student-update-details/student-update-details.component';
import {CourseDetailsComponent} from './course/course-details/course-details.component';
import {CourseContentListComponent} from './course/course-content-list/course-content-list.component';
import {CourseDashboardComponent} from './course/course-dashboard/course-dashboard.component';
import {CourseListComponent} from './course/course-list/course-list.component';
import {ContactComponent} from './header/contact/contact.component';
import {AboutusComponent} from './header/aboutus/aboutus.component';
import {DefaultComponent} from './layouts/default/default.component';
import {HeaderComponent} from './header/header.component';
import { StudentDetailsComponent } from './student/student-details/student-details.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},  
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'restapi', component: RestApiComponent },
  {path: 'header', component: HeaderComponent },
  {path: 'student-details', component: StudentDetailsComponent },

  {
    path:'instructor-dashboard',
    component: InstructorDashboardComponent
  },
  {
    path:'instructor-details',
    component: InstructorDetailsComponent
  },
  {
    path:'instructor-update-details',
    component: InstructorUpdateDetailsComponent
  },
  { path: '',
  component:DefaultComponent,
  children:[
    {
      path:'student-dashboard',
      component: StudentDashboardComponent
    }
  ]
   },
  {
    path:'student-update-details',
    component: StudentUpdateDetailsComponent
  },
  {
    path:'course-list',
    component: CourseListComponent
  },
  {
    path:'course-dashboard',
    component: CourseDashboardComponent
  },
  {
    path:'course-content-list',
    component: CourseContentListComponent
  },
  {
    path:'course-details',
    component: CourseDetailsComponent
  },
  {
    path:'aboutus',
    component: AboutusComponent
  },
  {
    path:'contact',
    component: ContactComponent
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
