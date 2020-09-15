import {DynamicColumnComponent} from "../dynamic-column/dynamic-column.component";

export enum Order{
  ASC,
  DEC
}

export class Sort {
  column: DynamicColumnComponent;
  order: Order;

  constructor(column: DynamicColumnComponent, order: Order){
    this.column = column;
    this.order = order;
  }
}
