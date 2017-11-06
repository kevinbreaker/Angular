import { Injectable } from '@angular/core';

@Injectable()
export class StudentsService {

  private studens: any[] = [
    {id:1 , name:'student 01', email: 'student01@email.com' },
    {id:2 , name:'student 02', email: 'student02@email.com' },
    {id:3 , name:'student 03', email: 'student03@email.com' }
  ];

  getStudents(){
    return this.studens;
  }

  getStudent(id: number){
    let students = this.getStudents();
    for(let student of students){
      if(student.id == id){
        return student;
      }
    }
    return null;
  }

  constructor() { }

}
