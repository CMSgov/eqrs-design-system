import { Directive, TemplateRef, Input } from '@angular/core';

@Directive({
  // selector: '[eqrsUiDynamicTemplate]'
  selector: '[dynamicTemplate]',
})
export class DynamicTemplateDirective {

  @Input() type: string;
  constructor(public template: TemplateRef<any>) { }
}
