import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {

    getCourses(){
      return [
        {id: 1, name: 'Angular'},
        {id: 2, name: 'NodeJs'}
      ];
    }

    getCourse(id: number){
      let courses = this.getCourses();
      for( let course of courses){
        if(course.id == id){
          return course;
        }
      }
      return null;
    }

  constructor() { }

}
