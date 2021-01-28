import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RestApiComponent } from './restapi/restapi.component';
import { HttpClientModule } from '@angular/common/http';
import {AuthorizationService} from "./shared/authorization.service";
import {FormsModule} from "@angular/forms";
import {MatCardModule} from '@angular/material/card';

import { InstructorDashboardComponent } from './instructor/instructor-dashboard/instructor-dashboard.component';
import {InstructorDetailsComponent} from './instructor/instructor-details/instructor-details.component'
import {InstructorUpdateDetailsComponent} from './instructor/instructor-update-details/instructor-update-details.component';
import {CourseDetailsComponent} from './course/course-details/course-details.component';
import {CourseContentListComponent} from './course/course-content-list/course-content-list.component';
import {CourseDashboardComponent} from './course/course-dashboard/course-dashboard.component';
import {CourseListComponent} from './course/course-list/course-list.component';
import { StudentDashboardComponent } from './student/student-dashboard/student-dashboard.component';
import { StudentDetailsComponent } from './student/student-details/student-details.component';
import { StudentUpdateDetailsComponent } from './student/student-update-details/student-update-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './header/contact/contact.component';
import { AboutusComponent } from './header/aboutus/aboutus.component';
import { SearchComponent } from './search/search.component';
import { DefaultComponent } from './layouts/default/default.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { ISidebarComponent } from './shared/components/i-sidebar/i-sidebar.component';
import {SheaderComponent} from './shared/components/sheader/sheader.component';
import { IHeaderComponent } from './shared/components/i-header/i-header.component';
import { AddCourseComponent } from './course/add-course/add-course.component';

import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';

import { WavesModule, ModalModule, CarouselModule } from 'angular-bootstrap-md'
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    RestApiComponent,
    StudentDashboardComponent,
    StudentDetailsComponent,
    StudentUpdateDetailsComponent,
    InstructorDashboardComponent,
    InstructorDetailsComponent,
    InstructorUpdateDetailsComponent,
    CourseDetailsComponent,
    CourseContentListComponent,
    CourseDashboardComponent,
    CourseListComponent,
    ContactComponent,
    AboutusComponent,
    SearchComponent,
    DefaultComponent,
    FooterComponent,
    SidebarComponent,
    ISidebarComponent,
    SheaderComponent,
    IHeaderComponent,
    AddCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTableModule,
    BrowserAnimationsModule,
    TableModule,
    CalendarModule,
		SliderModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ButtonModule,
		ToastModule,
    InputTextModule,
    ProgressBarModule,
    ToolbarModule,
    WavesModule,
    ModalModule,
    CarouselModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [AuthorizationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
