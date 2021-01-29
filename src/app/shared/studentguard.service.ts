import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthorizationService } from "../shared/authorization.service";
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class StudentGuard implements CanActivate {

    base_url: string;

    constructor(private router: Router
        , private _auth: AuthorizationService) {}
    
 /*   isStudent() {
      //  const jwtDecode = require('jwt-decode');
        let newToken;
        let decodedToken;
        this._auth.getAuthenticatedUser().getSession((err, session) => {
          if (err) {
            console.log(err);
            return false;
          }
          newToken = session.getIdToken().getJwtToken();
          decodedToken = jwt_decode.default(newToken);
          console.log(decodedToken['custom:role']);
        });
        console.log(decodedToken['custom:role']);
        if( decodedToken['custom:role'] == 'student' )
              return true;
          return false;
      } */

    canActivate() {
        // Check to see if a user has a valid token
        if (this._auth.isLoggedIn() && (this._auth.isStudent() || this._auth.isBoth())) {
            // If they do, return true and allow the user to load app
            return true;
        }

        // If not, they redirect them to the login page
        this.router.navigateByUrl('/login');
        return false;
    }


}