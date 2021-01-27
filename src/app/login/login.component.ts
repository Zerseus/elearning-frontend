import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from "../shared/authorization.service";
import {NgForm} from "@angular/forms";
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  emailVerificationMessage: boolean = false;

  constructor(private _login: LoginService,
              private auth: AuthorizationService,
              private _router: Router) {

  }

  

  onSubmit(form: NgForm) {

    const email = form.value.email;
    const password = form.value.password;
    
    this.auth.signIn(email, password).subscribe((data) => {
      var authenticatedUser = this.auth.getAuthenticatedUser();
    if (authenticatedUser == null) {
      return;
    }

      this.auth.getAuthenticatedUser().getSession((err, session) => {
        if (err) {
          console.log(err);
          return;
        }
        const token = session.getIdToken().getJwtToken();    
        const headers = { 'Authorization' : token };    
    //    const headers = new Headers();
    //    headers.append('Authorization', token);        
        console.log(token);
        this._login.sendData(headers)
          .subscribe(
          response => {           
            console.log(response);
       /*     if(response == "student")
              this._router.navigateByUrl('student-dashboard');
            else if(response == "instructor")
              this._router.navigateByUrl('instructor-dashboard');
            else if(response == "both")
              this._router.navigateByUrl('choice-dashboard');
            else 
              this._router.navigateByUrl('/'); */
          },
          error => {
            console.log(error);
          }
        );
      });

      this._router.navigateByUrl('student');
    }, (err)=> {
      this.emailVerificationMessage = true;
    });   
  }
}
