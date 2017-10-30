 import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-knowledge',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
})
export class InputPropertyComponent implements OnInit {

  @Input('name') knowledge:string = '';

  constructor() { }

  ngOnInit() {
  }

}
