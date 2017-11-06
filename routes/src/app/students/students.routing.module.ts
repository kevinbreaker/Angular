import { StudentFormComponent } from './student-form/student-form.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentsComponent } from './students.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const studentsRoutes: Routes = [
    { path: '', component: StudentsComponent, children: [
        { path: 'new', component: StudentFormComponent },
        { path: ':id', component: StudentDetailsComponent },
        { path: ':id/edit', component: StudentFormComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(studentsRoutes)],
  exports: [RouterModule],
})
export class StudentsRoutingModule { }

