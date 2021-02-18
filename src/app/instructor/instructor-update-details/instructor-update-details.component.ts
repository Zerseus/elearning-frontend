import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Instructor } from '../instructor.model';
import { InstructorService } from '../instructor.service';

@Component({
  selector: 'app-instructor-update-details',
  templateUrl: './instructor-update-details.component.html',
  styleUrls: ['./instructor-update-details.component.css']
})
export class InstructorUpdateDetailsComponent implements OnInit {

  instructor : Instructor = {
    fname : '',
    lname: '',
    address: '',
    phone: '',
    imageUrl: ''
  };

  constructor(private instructorService: InstructorService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.getInstructor(this.route.snapshot.params.id);
  }

  getInstructor(id: string): void {
    this.instructorService.get(id)
      .subscribe(
        data => {
          this.instructor = data;
    //      console.log(this.instructor);
        },
        error => {
          console.log(error);
        });
  }

  updateInstructor(): void {
    const data = {
      fname: this.instructor.fname,
      lname: this.instructor.lname,
      address: this.instructor.address,
      phone: this.instructor.phone,
      imageUrl: this.instructor.imageUrl
    };

  //  console.log(this.instructor);
    this.instructorService.update(this.instructor.id, data)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

}
