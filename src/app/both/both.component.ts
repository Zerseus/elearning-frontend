import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../shared/authorization.service';

@Component({
  selector: 'app-both',
  templateUrl: './both.component.html',
  styleUrls: ['./both.component.css']
})
export class BothComponent implements OnInit {

  constructor(public _auth: AuthorizationService) { }

  ngOnInit(): void {
  }

}
