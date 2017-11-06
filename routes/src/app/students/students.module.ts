import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StudentsComponent } from './students.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentsRoutingModule } from './students.routing.module';
import { StudentsService } from './students.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StudentsRoutingModule
  ],
  declarations: [
    StudentsComponent,
    StudentFormComponent,
    StudentDetailsComponent
  ],
  providers: [StudentsService]
})
export class StudentsModule { }
