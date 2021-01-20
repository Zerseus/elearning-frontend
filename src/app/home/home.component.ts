import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from "../shared/authorization.service";
//import { Http, Headers } from "@angular/http";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bAuthenticated = false;

  constructor(private http: HttpClient, private auth: AuthorizationService) { }

  ngOnInit() {
    var authenticatedUser = this.auth.getAuthenticatedUser();
    if (authenticatedUser == null) {
      return;
    }
    this.bAuthenticated = true;
  }

}
