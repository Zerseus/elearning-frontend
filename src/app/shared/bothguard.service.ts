import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from './authorization.service';

@Injectable({
  providedIn: 'root'
})
export class BothGuard {

  base_url: string;

    constructor(private router: Router
        , private _auth: AuthorizationService) {}

    canActivate() {
        // Check to see if a user has a valid token
        if (this._auth.isLoggedIn() && this._auth.isBoth()) {
            // If they do, return true and allow the user to load app
            return true;
        }

        // If not, they redirect them to the login page
        this.router.navigateByUrl('/login');
        return false;
    }
}
