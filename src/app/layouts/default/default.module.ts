import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDashboardComponent } from 'src/app/student/student-dashboard/student-dashboard.component';
import {DefaultComponent} from './default.component'; 
import {RouterModule} from '@angular/router';
import {SharedModule} from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {HomeComponent} from 'src/app/home/home.component';
@NgModule({
  declarations: [
    StudentDashboardComponent,
    DefaultComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatCardModule
  ]
})
export class DefaultModule { }
