import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sheader',
  templateUrl: './sheader.component.html',
  styleUrls: ['./sheader.component.css']
})
export class SheaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> =new EventEmitter()
  constructor() { }

  ngOnInit(){ }

  toggleSideBar(){
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);

  }

}
