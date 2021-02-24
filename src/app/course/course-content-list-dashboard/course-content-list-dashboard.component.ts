import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseContent } from '../course-content.model';
import { CoursecontentService } from '../coursecontent.service';

@Component({
  selector: 'app-course-content-list-dashboard',
  templateUrl: './course-content-list-dashboard.component.html',
  styleUrls: ['./course-content-list-dashboard.component.css']
})
export class CourseContentListDashboardComponent implements OnInit {

  
  id: number;
  chapters: CourseContent[] = [];
  cols: any[];
  activeIndex=0;
  currentVideo:CourseContent;
  data: any;
  

  constructor(private coursecontentService: CoursecontentService,
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit() {
    //console.log(this.route.snapshot.params.id);
    //console.log(this.route.snapshot.params.chapter_id);
       this.coursecontentService.getCourseContent(this.route.snapshot.params.id)
       .subscribe((data: CourseContent[]) => {
         this.chapters = data;
         this.currentVideo = this.chapters[this.activeIndex];
        // console.log(this.currentVideo);
         data;
       }); 
  }

  

  videoPlayerInit(data) {
    this.data = data;
    this.data.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.initVdo.bind(this));
    this.data.getDefaultMedia().subscriptions.ended.subscribe(this.nextVideo.bind(this));
  }

  
  nextVideo() {
    this.activeIndex++;

    if (this.activeIndex === this.chapters.length) {
      this.activeIndex = 0;
    }

    this.currentVideo = this.chapters[this.activeIndex];
  }

  initVdo() {
    this.data.play();
  }

  startPlaylistVdo(item, index: number) {
    this.activeIndex = index;
    this.currentVideo = item;
    console.log(this.currentVideo.chapter_Url)
  }

}
