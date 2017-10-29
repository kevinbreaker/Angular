import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url:string = 'kevinbreaker.github.io';
  Angular:boolean = true;
  urlImage:string = 'http://lorempixel.com/400/200/transport/';
  newValueKeyPress = '';
  savedValuePress = '';
  isMouseOver:boolean = false;

  getVal():number{
    return 1;
  }

  getKnowledge():boolean{
    return true;
  }

  clickedBtn(){
    alert('You cliked me!');
  }

  onKeyUp(event:KeyboardEvent){
    this.newValueKeyPress = (<HTMLInputElement>event.target).value; 
  }

  saveValue(value){
    this.savedValuePress = value;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() { }

  ngOnInit() {
  }

}
