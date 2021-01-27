import {NgModule} from '@angular/core';
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
import { InstructorGuard } from './shared/instructorguard.service';
import { StudentGuard } from './shared/studentguard.service';
import { ReverseGuard } from './shared/reverseguard.service';
import { SearchComponent } from './search/search.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},  
  {path: 'login', component: LoginComponent, canActivate: [ReverseGuard]},
  {path: 'register', component: RegisterComponent, canActivate: [ReverseGuard]},
  {path: 'restapi', component: RestApiComponent },
  {
    path:'instructor-dashboard',
    component: InstructorDashboardComponent,
    canActivate: [InstructorGuard]
  },
  {
    path:'instructor-details',
    component: InstructorDetailsComponent,
    canActivate: [InstructorGuard]
  },
  {
    path:'instructor-update-details',
    component: InstructorUpdateDetailsComponent,
    canActivate: [InstructorGuard]
  },
  {
    path:'student-dashboard',
    component: StudentDashboardComponent,
    canActivate: [StudentGuard]
  },
  {
    path:'student-update-details',
    component: StudentUpdateDetailsComponent,
    canActivate: [StudentGuard]
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
