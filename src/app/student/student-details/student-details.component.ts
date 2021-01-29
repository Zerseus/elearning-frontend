import { Component, OnInit } from '@angular/core';
import {CommonService} from 'src/app/common.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
public collection:any;
  constructor(private commonservice:CommonService) { }

  ngOnInit(): void {
    this.commonservice.getStudentList().subscribe((result)=>{
      this.collection =result;
      console.log(this.collection)
    });
  }

}
