import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit, OnDestroy {

  id: number;
  subscribe: Subscription;
  course:  any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private coursesService: CoursesService ) {
    // this.id =   this.route.snapshot.params['id'];    
   }

  ngOnInit() {
    this.subscribe = this.route.params.subscribe(
       (params: any) => { 
         this.id = params['id']
         this.course = this.coursesService.getCourse(this.id);

         if(this.course == null){
            this.router.navigate(['courses/not-found']);
         }
        });
  }

  ngOnDestroy(){
    this.subscribe.unsubscribe();
  }

}
