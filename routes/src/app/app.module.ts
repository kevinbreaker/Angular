import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterializeModule } from 'angular2-materialize';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routing.module';
// import { CoursesModule } from './courses/courses.module'; Lazyload
// import { StudentsModule } from './students/students.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    // CoursesModule, LazyLoad don't allow others imports
    // StudentsModule, LazyLoad
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
