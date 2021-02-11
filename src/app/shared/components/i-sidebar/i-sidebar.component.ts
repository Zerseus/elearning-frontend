import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { decode } from 'punycode';
import { Instructor } from 'src/app/instructor/instructor.model';
import { InstructorService } from 'src/app/instructor/instructor.service';
import { AuthorizationService } from '../../authorization.service';

@Component({
  selector: 'app-i-sidebar',
  templateUrl: './i-sidebar.component.html',
  styleUrls: ['./i-sidebar.component.css']
})
export class ISidebarComponent implements OnInit {

  token: any;
  email: string;
  username: string;

  constructor(private _router: Router, private auth: AuthorizationService, private instructorService: InstructorService) { }

  ngOnInit(): void {
    this.generateToken();
    this.retrieveInstructorDetails();
  }

  retrieveInstructorDetails(): void {
  //  console.log(this.token);
  //  const headers = { 'Authorization' : this.token };  
  //  console.log(headers);
    let decodedToken;
    decodedToken = this.auth.decodeToken(this.token);
  //  console.log(decodedToken['email']);
    this.email = decodedToken['email'];
    let parts = this.email.split("@", 2);
    this.username = parts[0];

 /*   this.instructorService.getInstructorId(headers)
      .subscribe(
        (response: Instructor) => {
          console.log(response);
          this.instructor = JSON.parse(JSON.stringify(response));
          console.log(this.instructor.name);
      }); */
  }

  onSubmit(form: NgForm){
    const title = form.value.search;
  //  console.log(title);
  //  this._router.navigateByUrl('/search',{ state: {search: search} });
    this._router.navigateByUrl('/instructor', {skipLocationChange: true}).then(()=>
    this._router.navigate(['/instructor/search'], {queryParams: {title: title}}));
  }

  generateToken(): any {
    this.auth.getAuthenticatedUser().getSession((err, session) => {
      if (err) {
        console.log(err);
        return;
      }
      this.token = session.getIdToken().getJwtToken();
      return;
    });
  }

  

}
