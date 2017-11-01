import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-ngfor',
  templateUrl: './directive-ng-for.component.html',
  styleUrls: ['./directive-ng-for.component.css']
})
export class DirectiveNgForComponent implements OnInit {

  knowledges:string[] = ['Angular', 'NodeJs', 'MongoDb'];

  constructor() { }

  ngOnInit() {
    for(let i = 0; i < this.knowledges.length; i++){
      let knowledge = this.knowledges[i];
    }
  }

}
