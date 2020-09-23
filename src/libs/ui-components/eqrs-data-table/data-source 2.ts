import {DynamicDatatableComponent} from "./dynamic-datatable/dynamic-datatable.component";
import {Order,Sort} from "./models/sort.model";
import { Observable } from 'rxjs';
export interface DataSource {
  dynTable:DynamicDatatableComponent;
  init():void;
  setData(data:any[]):void;
  dataLength:number;
  displayDataOb: Observable<any[]>;
  filterResults(searchText:string):void;
  currentPage:number;
  currentPageSize:number;
  setPageProps(currentPage:number, currentPageSize:number):void;
  setSorts(sorts:Sort[]);
}