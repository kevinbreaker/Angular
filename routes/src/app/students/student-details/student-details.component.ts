import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { StudentsService } from './../students.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit, OnDestroy {

  student: any;
  subscription: Subscription;
 
   constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentsServce: StudentsService
    ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.student = this.studentsServce.getStudent(id);
      }
    )
  }
  editContact(){
    this.router.navigate(['/students',this.student.id,'edit']);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
