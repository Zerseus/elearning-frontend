import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthorizationService } from "../shared/authorization.service";
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class ReverseGuard implements CanActivate {

    base_url: string;

    constructor(private router: Router
        , private _auth: AuthorizationService) {}

    canActivate() {
        // Check to see if a user has a valid token
        if (!this._auth.isLoggedIn()) {
            // If they do, return true and allow the user to load app
            return true;
        }

        // If not, they redirect them to the login page
        this.router.navigateByUrl('/');
        return false;
    }


}