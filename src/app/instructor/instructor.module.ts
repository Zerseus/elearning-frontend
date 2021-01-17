import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorDashboardComponent } from './instructor-dashboard/instructor-dashboard.component';
import { InstructorDetailsComponent } from './instructor-details/instructor-details.component';
import { InstructorRoutingComponent } from './instructor-routing/instructor-routing.component';
import { InstructorUpdateDetailsComponent } from './instructor-update-details/instructor-update-details.component';



@NgModule({
  declarations: [InstructorDashboardComponent, InstructorDetailsComponent, InstructorRoutingComponent, InstructorUpdateDetailsComponent],
  imports: [
    CommonModule
  ]
})
export class InstructorModule { }
