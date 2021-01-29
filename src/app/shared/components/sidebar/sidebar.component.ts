import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
=======
>>>>>>> bhanvi

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

<<<<<<< HEAD
  constructor(private _router: Router) { }
=======
  constructor() { }
>>>>>>> bhanvi

  ngOnInit(): void {
  }

<<<<<<< HEAD
  onSubmit(form: NgForm){
    const title = form.value.search;
    console.log(title);
  //  this._router.navigateByUrl('/search',{ state: {search: search} });
    this._router.navigateByUrl('/student', {skipLocationChange: true}).then(()=>
    this._router.navigate(['/student/search'], {queryParams: {title: title}}));
  }

=======
>>>>>>> bhanvi
}
