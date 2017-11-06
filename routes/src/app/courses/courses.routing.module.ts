import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { CoursesComponent } from './courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseNotFoundComponent } from './course-not-found/course-not-found.component';


const coursesRoutes: Routes = [
    { path: '', component: CoursesComponent },
    { path: 'not-found', component: CourseNotFoundComponent },
    { path: ':id', component: CourseDetailComponent }
 
];

@NgModule({
    
    imports:[
        RouterModule.forChild(coursesRoutes)
    ],
    exports: [RouterModule]
})
export class CoursesRoutingModule{


}