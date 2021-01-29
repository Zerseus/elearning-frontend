import { Component, EventEmitter, OnInit, Output } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
import { AuthorizationService } from '../../authorization.service';
=======
>>>>>>> bhanvi

@Component({
  selector: 'app-sheader',
  templateUrl: './sheader.component.html',
  styleUrls: ['./sheader.component.css']
})
export class SheaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> =new EventEmitter()
<<<<<<< HEAD
  constructor(public _auth: AuthorizationService,
    private _router: Router) { }
=======
  constructor() { }
>>>>>>> bhanvi

  ngOnInit(){ }

  toggleSideBar(){
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);

  }

<<<<<<< HEAD
  doLogout(){    
    this._auth.logOut();
    this._router.navigateByUrl('/login');
  }

}
=======
}
>>>>>>> bhanvi
