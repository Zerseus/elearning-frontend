import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from "../shared/authorization.service";
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public _auth: AuthorizationService,
              private _router: Router) { }

  doLogout(){    
    this._auth.logOut();
    this._router.navigateByUrl('/login');
  }

  onSubmit(form: NgForm){
    const title = form.value.search;
    console.log(title);
  //  this._router.navigateByUrl('/search',{ state: {search: search} });
    this._router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this._router.navigate(['/search'], {queryParams: {title: title}}));
  }
}
