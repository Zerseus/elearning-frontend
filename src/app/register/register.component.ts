import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthorizationService} from "../shared/authorization.service";
import { Router } from '@angular/router';
import {CommonService} from 'src/app/common.service';
// https://github.com/aws/amazon-cognito-identity-js
// https://docs.aws.amazon.com/cognito/latest/developerguide/using-amazon-cognito-user-identity-pools-javascript-examples.html

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent { 
  confirmCode: boolean = false;
  codeWasConfirmed: boolean = false;
  error: string = "";
  title='student'
  studentDetails =null;
  studentUpdate={
    id:"",
    name:"",
    address:"",
    number:""
  };
  
  constructor(private auth: AuthorizationService,
              private _router: Router,private commonservice: CommonService) { }

  

  validateAuthCode(form: NgForm) {
    const code = form.value.code;
    
    this.auth.confirmAuthCode(code).subscribe(
      (data) => {
        //this._router.navigateByUrl('/');
        this.codeWasConfirmed = true;
        this.confirmCode = false;
      },
      (err) => {
        console.log(err);
        this.error = "Confirm Authorization Error has occurred";
      });
  }
  register(registerForm: NgForm){
    this.commonservice.studentregister(registerForm.value).subscribe(
      (resp)=>{
        console.log(resp);
        registerForm.reset(); 
        this.getStudents(); 
          },
      (err)=>{
        console.log(err);
      }
    );
  }

  getStudents(){
    this.commonservice.getStudents().subscribe(
      (resp)=> {
        console.log(resp);
        this.studentDetails=resp;
      },
      (err)=>{
        console.log(err);
      }
    );

  }
}
