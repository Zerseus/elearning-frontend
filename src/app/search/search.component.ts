import { Component, OnInit } from '@angular/core';
import { SearchService } from '../shared/search.service';
import { Location } from '@angular/common';
import { CourseList } from '../shared/courselist.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public courseList: CourseList[];
  constructor(private _search: SearchService, private location: Location, private route: ActivatedRoute) { }

  ngOnInit(): void {
  //  console.log('state >>>', history.state);
 //   console.log('location >>>', this.location.getState().valueOf());
  //  const title: string = history.state.search;
    const title: string = this.route.snapshot.queryParamMap.get('title');
    console.log(title);
    this.getData(title);
    console.log(this.courseList);
  }

  public getData(title: string) {
    this._search.search(title).subscribe((data: CourseList[]) => {           
      console.log(data);
      this.courseList = data;
    //  return "Search Structure Works!"
    },
    error => {
      console.log(error);
    })
  }
}
