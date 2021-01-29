import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-i-sidebar',
  templateUrl: './i-sidebar.component.html',
  styleUrls: ['./i-sidebar.component.css']
})
export class ISidebarComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    const title = form.value.search;
    console.log(title);
  //  this._router.navigateByUrl('/search',{ state: {search: search} });
    this._router.navigateByUrl('/instructor', {skipLocationChange: true}).then(()=>
    this._router.navigate(['/instructor/search'], {queryParams: {title: title}}));
  }

}
