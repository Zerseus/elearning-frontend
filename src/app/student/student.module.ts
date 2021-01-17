import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentRoutingComponent } from './student-routing/student-routing.component';
import { StudentUpdateDetailsComponent } from './student-update-details/student-update-details.component';



@NgModule({
  declarations: [StudentDashboardComponent, StudentDetailsComponent, StudentRoutingComponent, StudentUpdateDetailsComponent],
  imports: [
    CommonModule
  ]
})
export class StudentModule { }
