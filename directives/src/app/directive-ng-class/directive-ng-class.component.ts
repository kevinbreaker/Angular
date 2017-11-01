import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-ngclass',
  templateUrl: './directive-ng-class.component.html',
  styleUrls: ['./directive-ng-class.component.css']
})
export class DirectiveNgClassComponent implements OnInit {

  myFav:boolean = false;

 
  toggleFav(){
    this.myFav = !this.myFav;
  }

  constructor() { }

  ngOnInit() {
    
  }

}
