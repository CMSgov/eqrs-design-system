import { Directive, AfterViewInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[focusOnLoad]'
})
export class FocusOnLoadDirective implements AfterViewInit{

  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
  	console.log("focusOnLoad ngOnInit");
  }
  
  ngAfterViewInit(){
  	console.log("focusOnLoad ngAfterViewInit");
    this.elementRef.nativeElement.setAttribute("tabindex", -1);
    this.elementRef.nativeElement.focus();
    console.log(this.elementRef.nativeElement);
  }
}
