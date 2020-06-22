import { Component, OnInit, Input, TemplateRef, ContentChildren, QueryList } from '@angular/core';
import { DynamicTemplateDirective } from "../dynamic-template.directive";

@Component({
  // selector: 'eqrs-ui-dynamic-column',
  selector: 'dynamic-column',
  template: '',
  styleUrls: ['./dynamic-column.component.scss']
})
export class DynamicColumnComponent {
  @ContentChildren(DynamicTemplateDirective)
  public templates: QueryList<DynamicTemplateDirective>;

  @Input()
  public id: string;
  @Input()
  public header: string;
  @Input()
  public field: string;
  @Input()
  public sortable: boolean;
  @Input()
  public keepHeader: boolean;
  @Input()
  public sortFunction: (a: any, b: any) => number;
  @Input()
  public searchValue: any; //string or (rowData,field) => string
  @Input()
  public searchField: boolean = false;

  @Input()
  public style: any;

  public headerTemplate: TemplateRef<any>;
  public cellTemplate: TemplateRef<any>;

  constructor() { }

  ngOnInit() {

  }

  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.type) {
        case 'header':
          this.headerTemplate = item.template;
          break;
        case 'cell':
          this.cellTemplate = item.template;
          break;
        default:
          this.cellTemplate = item.template;
          break;
      }
    });
  }

  hasHeaderTemplate() {
    return typeof (this.headerTemplate) !== 'undefined';
  }

  hasCellTemplate() {
    return typeof (this.cellTemplate) !== 'undefined';
  }

}
