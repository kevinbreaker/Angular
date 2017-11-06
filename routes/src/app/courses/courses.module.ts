import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseNotFoundComponent } from './course-not-found/course-not-found.component';
import { CoursesComponent } from './courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CoursesService } from './courses.service';
import { CoursesRoutingModule } from './courses.routing.module';

@NgModule({
    imports: [
        CommonModule,
        CoursesRoutingModule
    ],
    exports: [],
    declarations: [
        CourseDetailComponent,
        CoursesComponent,
        CourseNotFoundComponent
    ],
    providers: [CoursesService],
})
export class CoursesModule { }
