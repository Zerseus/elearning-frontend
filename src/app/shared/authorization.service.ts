import { Injectable } from '@angular/core';
import {CognitoUserAttribute, AuthenticationDetails, CognitoUser, CognitoUserPool} from 'amazon-cognito-identity-js';
import { Observable } from 'rxjs/internal/Observable';
import * as jwt_decode from 'jwt-decode';
//import { Observable } from 'rxjs/Observable';

const poolData = {
  UserPoolId: 'us-east-1_iP3ZtAyR4', // Your user pool id here
  ClientId: '525knh2pc2irtikv0853t1227s' // Your client id here  
};

const userPool = new CognitoUserPool(poolData);

@Injectable()
export class AuthorizationService {
  cognitoUser: any;

  constructor() { }

  register(email, password, role) {

    const attributeList = [];
    const dataRole = {
      Name: 'custom:role',
      Value: role.toString()
    }
    const attributeRole = new CognitoUserAttribute(dataRole);
    attributeList.push(attributeRole);
    return Observable.create(observer => {
      userPool.signUp(email, password, attributeList, null, (err, result) => {
        if (err) {
          console.log("signUp error", err);
          observer.error(err);
        }

        this.cognitoUser = result.user;
        console.log("signUp success", result);
        observer.next(result);
        observer.complete();
      });
    });

  }

  confirmAuthCode(code) {
    const user = {
      Username : this.cognitoUser.username,
      Pool : userPool
    };
    return Observable.create(observer => {
      const cognitoUser = new CognitoUser(user);
      cognitoUser.confirmRegistration(code, true, function(err, result) {
        if (err) {
          console.log(err);
          observer.error(err);
        }
        console.log("confirmAuthCode() success", result);
        observer.next(result);
        observer.complete();
      });
    });
  } /* */

  signIn(email, password) { 

    const authenticationData = {
      Username : email,
      Password : password,
    };
    const authenticationDetails = new AuthenticationDetails(authenticationData);

    const userData = {
      Username : email,
      Pool : userPool
    };
    const cognitoUser = new CognitoUser(userData);
    
    return Observable.create(observer => {

      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
          
          //console.log(result);
          observer.next(result);
          observer.complete();
        },
        onFailure: function(err) {
          console.log(err);
          observer.error(err);
        },
      });
    });
  }

  isLoggedIn() {    
    return userPool.getCurrentUser() != null;
  }

  getAuthenticatedUser() {
    // gets the current user from the local storage
    return userPool.getCurrentUser();
  }

  logOut() {
    this.getAuthenticatedUser().signOut();
    this.cognitoUser = null;
  }

  isBoth() {
    //  const jwtDecode = require('jwt-decode');
      let newToken;
      let decodedToken;
      this.getAuthenticatedUser().getSession((err, session) => {
        if (err) {
          console.log(err);
          return false;
        }
        newToken = session.getIdToken().getJwtToken();
        decodedToken = jwt_decode.default(newToken);
     //   console.log(decodedToken['custom:role']);
      });
   //   console.log(decodedToken['custom:role']);
      if( decodedToken['custom:role'] == 'both' )
          return true;
      return false;
    }

  isInstructor() {
  //  const jwtDecode = require('jwt-decode');
    let newToken;
    let decodedToken;
    this.getAuthenticatedUser().getSession((err, session) => {
      if (err) {
        console.log(err);
        return false;
      }
      newToken = session.getIdToken().getJwtToken();
      decodedToken = jwt_decode.default(newToken);
  //    console.log(decodedToken['custom:role']);
    });
  //  console.log(decodedToken['custom:role']);
    if( decodedToken['custom:role'] == 'instructor' )
        return true;
    return false;
  }

  isStudent() {
  //  const jwtDecode = require('jwt-decode');
    let newToken;
    let decodedToken;
    this.getAuthenticatedUser().getSession((err, session) => {
      if (err) {
        console.log(err);
        return false;
      }
      newToken = session.getIdToken().getJwtToken();
      decodedToken = jwt_decode.default(newToken);
    //  console.log(decodedToken['custom:role']);
    });
  //  console.log(decodedToken['custom:role']);
    if( decodedToken['custom:role'] == 'student' )
          return true;
      return false;
  }

  decodeToken(newToken) {
    let decodedToken;
    decodedToken = jwt_decode.default(newToken);
    return decodedToken;
  }
}
