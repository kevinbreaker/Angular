import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-ngif',
  templateUrl: './directive-ng-if.component.html',
  styleUrls: ['./directive-ng-if.component.css']
})
export class DirectiveNgIfComponent implements OnInit {

  knowledge:string[] = ['Angular'];
  showKnowledge:boolean = false;
  
  onShowKnowledge(){
    this.showKnowledge = !this.showKnowledge;
  }

  constructor() { }

  ngOnInit() {
  }

}
