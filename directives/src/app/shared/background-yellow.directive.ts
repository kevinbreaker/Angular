import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[backgroundYellow]'
})
export class BackgroundYellowDirective {

  constructor(private _elementRef: ElementRef, private _renderer: Renderer) {
    // console.log(this._elementRef);
    // this._elementRef.nativeElement.style.backgroundColor = 'yellow'; // NOT SECURE .. Attack XXS
    this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color', 'yellow');
    
   }

}
