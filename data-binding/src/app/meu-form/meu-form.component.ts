import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {
  
  name:string = 'Abc';
  
  person:any = {
    name: 'def',
    age: 21

  }
  constructor() { }

  ngOnInit() {
  }

}
