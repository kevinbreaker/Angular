import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-ngstyle',
  templateUrl: './directive-ng-style.component.html',
  styleUrls: ['./directive-ng-style.component.css']
})
export class DirectiveNgStyleComponent implements OnInit {

  active:boolean = false;
  fontValue:number = 10;

  constructor() { }

  ngOnInit() {
  }

  toChange(){
    this.active = !this.active;
  }

}
