import {DynamicDatatableComponent} from "./dynamic-datatable/dynamic-datatable.component";
import {DynamicColumnComponent} from "./dynamic-column/dynamic-column.component";
import {Order,Sort} from "./models/sort.model";
import {DataSource} from "./data-source";
import { BehaviorSubject ,  Observable } from 'rxjs';
export class MemDataSource implements DataSource {
  dynTable:DynamicDatatableComponent;
  data:any[];
  ctxData:any[];
  displayData:any[];
  displayDataSub = new BehaviorSubject<any[]>([]);
  get displayDataOb(): Observable<any[]> {
    return this.displayDataSub.asObservable();
  }
  sorts:Sort[]=[];
  searchFilterText: string = null;
  previousSearchText: string = null;
  filteredResults: any[] = [];
  private cachedSearchText = [];
  private _currentPage:number;
  set currentPage(v:number) {
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
  setPageProps(currentPage:number, currentPageSize:number) {
    this._currentPage = currentPage;
    this._currentPageSize = currentPageSize;
    this.valDisplayData();
  }
  get dataLength():number {
    return this.data ? this.data.length : 0;
  }

  constructor() {
    this._currentPage = 0;
  }
  init() {
  }
  setData(data:any[]):void {
    this.data = data;
    this.previousSearchText = null;
    this.cachedSearchText = []; //data changed, delete cached searched text
    if (this.dynTable.cacheAheadOfTime) {  //if data changed recache search results
      this.cacheTemplateCells();
    }
  }

  valDisplayData() {
    if(this.sorts.length == 0){
      this.ctxData = (this.searchFilterText == "" ? this.data : this.filteredResults);
    }
    //console.dir(this.ctxData);
    if(this.dynTable.pagination == null){
      this.displayData = this.ctxData;
    } else {
      let start = this.currentPage * this.currentPageSize;
      let end = (start + this.currentPageSize > this.ctxData.length ? this.ctxData.length : start + this.currentPageSize);
      this.displayData = this.ctxData.slice(start, end);
    }
    //console.dir(this.displayData);
    this.displayDataSub.next(this.displayData);
  }
  setSorts(sorts:Sort[]) {
    //console.log("setSorts");
    //console.dir(sorts);
    this.sorts = sorts;
    // TODO: export null checking
    if(this.data == null || typeof this.data == 'undefined' || this.data.length == 0) return; //no sorting of data to happen
    this.ctxData = (this.searchFilterText.trim() == "" ? this.data.slice() : this.filteredResults.slice());
    if(this.sorts.length > 0) {
      this.ctxData.sort(this.sortFunction.bind(this));
    }
    this.valDisplayData();
  }
  cacheTemplateCells(){ //Method to cache cell template before hand
    //If search text contains the previous search, we only have to search the already filtered results
    let searchData = this.data;

    //Create component to check rendered search values
    for (let rowIndex = 0; rowIndex < searchData.length; rowIndex++) {
      let rowData = searchData[rowIndex];

      if (this.cachedSearchText.length <= rowIndex) {
        this.cachedSearchText.push([]);
      }

      let columnIndex = -1;
      this.dynTable.columns.some((column: DynamicColumnComponent) => {
        columnIndex++;
        this.getValueOfCell(column, rowData, columnIndex, rowIndex);
        return false;
      });
    }
  }
  getValueOfCell(column, rowData, columnIndex, rowIndex): string{
    if(this.cachedSearchText[rowIndex].length <= columnIndex) {
      let value = "";

      if (typeof column.searchValue != 'undefined') {
        if (typeof column.searchValue == 'string') {
          value = column.searchValue;
        }
        else {
          value = column.searchValue(rowData, column.field);
        }
      } else {
        value = (rowData[column.field]) ? rowData[column.field].toString() : "";
      }
    
      value = this.dynTable.searchCaseSensitive ? value.trim() : value.trim().toLowerCase();

      this.cachedSearchText[rowIndex].push(value);
    }

    return this.cachedSearchText[rowIndex][columnIndex];
  }
  private sortFunction(obj1: any, obj2: any){
    for(let sort of this.sorts){
      if(typeof(sort.column.sortFunction) != 'undefined'){
        let rVal = sort.column.sortFunction(obj1[sort.column.field], obj2[sort.column.field]);
        if(rVal != 0) {
          return sort.order == Order.ASC ? rVal : -rVal;
        }
      }

      if(obj1[sort.column.field] < obj2[sort.column.field]){
        return sort.order == Order.ASC ? -1 : 1;
      }
      else if(obj1[sort.column.field] > obj2[sort.column.field]){
        return sort.order == Order.ASC ? 1 : -1;
      }
    }

    return 0;
  }
  filterResults(searchText:string):void {
    //console.log("filterResults searchText:"+searchText);
    this.searchFilterText = searchText;
    let modifiedSearchText = this.dynTable.searchCaseSensitive ? this.searchFilterText.trim() : this.searchFilterText.trim().toLowerCase();
    this._currentPage = 0;
    //console.log("modifiedSearchTest:"+modifiedSearchText);
    if(modifiedSearchText == "" || !this.dynTable.contentInitiated) {
      this.filteredResults = this.data;
      this.previousSearchText = modifiedSearchText;
    }
    else {
      let searchData = this.data;

      this.filteredResults = [];

      //Create component to check rendered search values
      for (let rowIndex = 0; rowIndex < searchData.length; rowIndex++) {
        let rowData = searchData[rowIndex];

        if (this.cachedSearchText.length <= rowIndex) {
          this.cachedSearchText.push([]);
        }
        //console.log("rowInd:"+rowIndex);
        let columnIndex = -1;
        this.dynTable.columns.some((column: DynamicColumnComponent) => {
          columnIndex++;
          //console.log("colInd:"+columnIndex);
          let textValue = this.getValueOfCell(column, rowData, columnIndex, rowIndex);
          //console.log("textValue:"+textValue);
          if (textValue.indexOf(modifiedSearchText) > -1) {
            if (column.searchField === true) {
              this.filteredResults.push(rowData);
              return true;
            }
          }
          return false;
        });
      }
    }

    this.previousSearchText = this.searchFilterText;
    //console.log("dynTable.sortBy");
    this.dynTable.sortBy(null); //resort filtered results
  }
}