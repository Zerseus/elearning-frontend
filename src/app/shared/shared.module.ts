import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from 'src/app/shared/components/footer/footer.component';
import { SheaderComponent } from 'src/app/shared/components/sheader/sheader.component';
import {SidebarComponent} from 'src/app/shared/components/sidebar/sidebar.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import {DefaultComponent} from 'src/app/layouts/default/default.component';
import {MatMenuModule, MatMenuTrigger} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import { NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { StudentDetailsComponent } from 'src/app/student/student-details/student-details.component';
import {MatCardModule} from '@angular/material/card';
import {HomeComponent} from 'src/app/home/home.component';
import { ISidebarComponent } from './components/i-sidebar/i-sidebar.component';
import { IHeaderComponent } from './components/i-header/i-header.component';



@NgModule({
  declarations: [
  
    SidebarComponent,
    FooterComponent,
    SheaderComponent,
    HomeComponent,
    ISidebarComponent,
    IHeaderComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbar,
    MatIcon,
    MatButtonModule,
    FlexLayoutModule,
    Component,
    MatMenuModule,
    MatListModule,
    MatMenuTrigger,
    StudentDetailsComponent,
    MatCardModule
   
  ],
  
  exports:[
    SheaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers:[],
  bootstrap:[DefaultComponent]
})
export class SharedModule { }
