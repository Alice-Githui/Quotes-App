import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLikeanddislike]'
})
export class LikeanddislikeDirective {

  constructor(private elem:ElementRef) { 
    this.elem.nativeElement.style.textDecoration='click'
  }

}
