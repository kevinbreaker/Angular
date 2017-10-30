import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() value:number = 0;

  @Output() changedValue = new EventEmitter();
  
  @ViewChild('inputProper')  inputValue: ElementRef;

  increment(){
    this.inputValue.nativeElement.value++;
    this.changedValue.emit({ newValue: this.value });
  }

  decrement(){
    this.inputValue.nativeElement.value--;
    this.changedValue.emit({ newValue: this.value });
    
  }

  constructor() { }

  ngOnInit() {
  }

}
