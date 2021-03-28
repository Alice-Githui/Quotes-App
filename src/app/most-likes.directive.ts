import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appMostLikes]'
})
export class MostLikesDirective {

  constructor(private elem:ElementRef) { 
    this.elem.nativeElement.style.color='red';
   }

}
