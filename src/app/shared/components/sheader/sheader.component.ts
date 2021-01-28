import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from '../../authorization.service';

@Component({
  selector: 'app-sheader',
  templateUrl: './sheader.component.html',
  styleUrls: ['./sheader.component.css']
})
export class SheaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> =new EventEmitter()
  constructor(public _auth: AuthorizationService,
    private _router: Router) { }

  ngOnInit(){ }

  toggleSideBar(){
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);

  }

  doLogout(){    
  //  this._auth.logOut();
    this._router.navigateByUrl('/login');
  }

}