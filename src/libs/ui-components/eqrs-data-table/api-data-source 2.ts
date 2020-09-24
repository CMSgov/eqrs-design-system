import {DynamicDatatableComponent} from "./dynamic-datatable/dynamic-datatable.component";
import {Order,Sort} from "./models/sort.model";
import { BehaviorSubject ,  Observable } from 'rxjs';
export class APIDataSource {
  dynTable:DynamicDatatableComponent;
  rtrData:()=>void;
  setData(data:any[]):void {
    return;
  }
  _dataLength:number=0;
  get dataLength():number {
    return this._dataLength;
  }
  displayData:any[];
  displayDataSub = new BehaviorSubject<any[]>([]);
  get displayDataOb(): Observable<any[]> {
    return this.displayDataSub.asObservable();
  }

  constructor() {
    this._currentPage = 0;
  }
  init():void {
  }

  searchText:string;
  filterResults(searchText:string):void {
    this.searchText = searchText;
    this.valDisplayData();
  }
  _currentPage:number;
  set currentPage(v:number) {
    console.log("currentPage:"+v);
    this._currentPage = v;
    this.valDisplayData();
  }
  get currentPage():number {
    return this._currentPage;
  }
  _currentPageSize:number;
  set currentPageSize(v:number) {
    this._currentPageSize = v;
    this.valDisplayData();
  } 
  get currentPageSize():number {
    return this._currentPageSize;
  }
  setPageProps(currentPage, currentPageSize) {
    this._currentPage = currentPage;
    this._currentPageSize = currentPageSize;
    this.valDisplayData();
  }
  get offset():number {
    return this.currentPage * this.currentPageSize;
  }
  sorts:Sort[];
  setSorts(sorts:Sort[]) {
    this.sorts = sorts;
    this.valDisplayData();
  }
  valDisplayData() {
    this.rtrData();
  }
  static pageUrlStr(offset:number, max:number) {
    let p = "offset=" + offset + "&max=" + max;
    return p;
  }
}