import { Component, OnInit, Input, TemplateRef, ElementRef, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'template-loader',
  template:`<ng-container *ngTemplateOutlet="template; context: context"></ng-container>`,
  styleUrls: ['./template-loader.component.css']
})
export class TemplateLoaderComponent implements OnInit {

  @Input() template: TemplateRef<any>;
  @Input() context: {};

  constructor(
    public elementRef: ElementRef, 
    public changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit() {
  }

}
