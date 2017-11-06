import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { CoursesService } from './courses.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: any[];
  page: number;
  subscription: Subscription;

  constructor(
    private coursesSevice: CoursesService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.courses = this.coursesSevice.getCourses();

    this.subscription = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.page = queryParams['pag'];
       });
  }

  nextPage(){
  
    this.router.navigate(['/courses'],
      { queryParams: { 'pag': ++this.page }});
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
