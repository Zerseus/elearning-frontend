import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-add-course-content',
  templateUrl: './add-course-content.component.html',
  styleUrls: ['./add-course-content.component.css']
})
export class AddCourseContentComponent implements OnInit {
  dynamicForm: FormGroup;
  submitted = false;
  video:boolean[] = new Array();
  showVideoButton:boolean[] = new Array();
  ppt:boolean[] = new Array();
  showPPTButton:boolean[] = new Array();
  doc:boolean[] = new Array();
  showDocButton:boolean[] = new Array();

  constructor(private formBuilder: FormBuilder, private courseService: CourseService) { }

  ngOnInit() {
    this.dynamicForm = this.formBuilder.group({
        numberOfTickets: ['', Validators.required],
        tickets: new FormArray([])
    });
}

// convenience getters for easy access to form fields
get f() { return this.dynamicForm.controls; }
get t() { return this.f.tickets as FormArray; }

addChapterForm(e) {
    this.t.push(this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]]
    }));
}

deleteChapterForm(e) {
    this.t.removeAt(e.target.value);
}

addVideoForm(i) {
  console.log(i);
  console.log(this.video[i]);
  this.video[i] = true;
  this.showVideoButton[i] = true;
  this.showPPTButton[i] = true;
  this.showDocButton[i] = true;
}

deleteVideoForm(i) {
  this.video[i] = false;
  this.showVideoButton[i] = false;
  this.showPPTButton[i] = false;
  this.showDocButton[i] = false;
}

addPPTForm(i) {
  this.ppt[i] = true;
  this.showPPTButton[i] = true;
  this.showVideoButton[i] = true;
  this.showDocButton[i] = true;
}

deletePPTForm(i) {
  this.ppt[i] = false;
  this.showPPTButton[i] = false;
  this.showVideoButton[i] = false;
  this.showDocButton[i] = false;
}

addDocForm(i) {
  this.doc[i] = true;
  this.showDocButton[i] = true;
  this.showPPTButton[i] = true;
  this.showVideoButton[i] = true;
}

deleteDocForm(i) {
  this.doc[i] = false;
  this.showDocButton[i] = false;
  this.showPPTButton[i] = false;
  this.showVideoButton[i] = false;
}

onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.dynamicForm.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.dynamicForm.value, null, 4));
}

onReset() {
    // reset whole form back to initial state
    this.submitted = false;
    this.dynamicForm.reset();
    this.t.clear();
}

onClear() {
    // clear errors and reset ticket fields
    this.submitted = false;
    this.t.reset();
}

uplo: File;
  onUpload(event) {
    for (let file of event.files) {
      this.uplo = file;
    }
    this.uploadFileToActivity();
  }

  uploadFileToActivity() {
    this.courseService.upload(this.uplo).subscribe((response: string) => {
      console.log(response);
    //  this.course.url = response;
    }, error => {
      console.log(error);
    });
  }

}
