import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Instructor } from 'src/app/instructor/instructor.model';
import { InstructorService } from 'src/app/instructor/instructor.service';
import { AuthorizationService } from '../../authorization.service';

@Component({
  selector: 'app-i-header',
  templateUrl: './i-header.component.html',
  styleUrls: ['./i-header.component.css']
})
export class IHeaderComponent implements OnInit {

  instructor: Instructor;
  id: number;
  token: any;

  @Output() toggleSideBarForMe: EventEmitter<any> =new EventEmitter()
  constructor(public _auth: AuthorizationService,
    private _router: Router,
    private instructorService: InstructorService) { }

  ngOnInit(){
    this.generateToken();

    const headers = { 'Authorization' : this.token };  
 //   console.log(headers);

    this.instructorService.getInstructorId(headers)
      .subscribe(
        (response: Instructor) => {
      //    console.log(response);
          this.instructor = JSON.parse(JSON.stringify(response));
          this.id = this.instructor.id;
        });
  }

  toggleSideBar(){
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);

  }

  doLogout(){    
    this._auth.logOut();
    this._router.navigateByUrl('/login');
  }

  generateToken(): any {
    this._auth.getAuthenticatedUser().getSession((err, session) => {
      if (err) {
        console.log(err);
        return;
      }
      this.token = session.getIdToken().getJwtToken();
      return;
    });
  }

}
