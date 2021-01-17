import { Component, OnInit } from '@angular/core';
import { AuthorizationService} from "../shared/authorization.service";
//import {Http, Headers} from "@angular/http";
import { HttpClient } from '@angular/common/http';

export class PersonWithCars {
  constructor(public name: string, public age: number) { }  
}

@Component({
  selector: 'app-restapi',
  templateUrl: './restapi.component.html',
  styleUrls: ['./restapi.component.css']
})
export class RestApiComponent implements OnInit {

  _data : any;

  constructor(private http: HttpClient, private auth: AuthorizationService) { }

  ngOnInit() {
    var authenticatedUser = this.auth.getAuthenticatedUser();
    if (authenticatedUser == null) {
      return;
    }
    authenticatedUser.getSession( (err, session) => {
      if (err) {
        console.log(err);
        return;
      }
      const token = session.getIdToken().getJwtToken();      
   //   const headers = new Headers();
    //  headers.append('Authorization', token);      
      var that = this;
      this.auth.getAuthenticatedUser().getSession((err, session) => {
        if (err) {
          console.log(err);
          return;
        }
        const token = session.getIdToken().getJwtToken();    
        const headers = { 'Authorization' : token };    
    //    const headers = new Headers();
    //    headers.append('Authorization', token);        
        console.log(token);
        this.http.post<any>('https://vt198qxo2j.execute-api.us-east-1.amazonaws.com/prod/user', {title: "hello"}, { headers })
          .subscribe(
          response => {           
            console.log(response);
          },
          error => {
            console.log(error);
          }
        );
      });
    });
  }

}
