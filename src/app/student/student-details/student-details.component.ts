import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {CommonService} from 'src/app/common.service';
import { Studentdetails } from 'src/app/studentdetails.model';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent  {
  number:String="";
 
title='student'
 studentDetails =null;

 studentUpdate={
   id:"",
   name:"",
   address:"",
   number:""
 };
  constructor(private commonservice: CommonService){
    this.getStudents();
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
  editStudent(student){
    this.studentUpdate=student;

  }
  update(){
    this.commonservice.update(this.studentUpdate).subscribe(
      (resp)=>{
        console.log(resp);
      },
      (err)=>{
        console.log(err);
      }
    );
  }

  delete(student){
    this.commonservice.delete(student.studentid).subscribe(
      (resp)=>{
        console.log(resp);
      },
      (err)=>{
        console.log(err);
      }
    );
  }

}


  

 
