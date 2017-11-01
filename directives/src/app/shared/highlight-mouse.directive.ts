import { Directive, HostListener, HostBinding, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
    //this._renderer.setElementStyle(this._elementRef.nativeElement,'background-color','yellow'); BEFORE
    this.backgroundColorX = 'yellow'; //  AFTER with HostBinding
  }

  @HostListener('mouseleave') onMouseLeave(){
  //  this._renderer.setElementStyle(this._elementRef.nativeElement,'background-color','white'); BEFORE
  this.backgroundColorX = 'white'; //  AFTER with HostBinding
  
  }

  @HostBinding('style.backgroundColor')  backgroundColorX:string;

  constructor(
   // private _elementRef:ElementRef,   BEFORE
   // private _renderer:Renderer        BEFORE 
   ) {}

}
