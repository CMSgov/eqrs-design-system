import {
  Component, OnInit, ContentChildren, QueryList, AfterContentInit, Input, Output, SimpleChanges, OnChanges,
  ContentChild, ComponentFactoryResolver, ElementRef, ViewContainerRef, ChangeDetectorRef, EventEmitter
} from '@angular/core';
import {DynamicColumnComponent} from '../dynamic-column/dynamic-column.component';
import {Sort, Order} from '../models/sort.model'
import {PaginationComponent} from "../pagination/pagination.component";
export { DynamicColumnComponent} from '../dynamic-column/dynamic-column.component';

import {MemDataSource} from "../mem-data-source";

@Component({
  // selector: 'eqrs-ui-dynamic-datatable',
  selector: 'dynamic-datatable',
  templateUrl: './dynamic-datatable.component.html',
  styleUrls: ['./dynamic-datatable.component.scss']
})
export class DynamicDatatableComponent implements OnInit, OnChanges, AfterContentInit {
  @ContentChildren(DynamicColumnComponent)
  public columns : QueryList<DynamicColumnComponent>;
  @ContentChild(PaginationComponent, {static: false})
  public pagination: PaginationComponent;

  @Input()
  public caption: String;
  @Input()
  public data: any[];
  @Input()
  public searchFilter: boolean = false;
  @Input()
  public externalSearch: boolean = false;
  @Input()
  public externalSearchValue: string = "";
  @Input()
  public showCaption: boolean = true;
  @Input()
  public emptyMessage: string = "No records found";
  @Input()
  public multiSort: boolean = false;
  @Input()
  public searchCaseSensitive: boolean = false;
  @Input()
  public searchWaitTime: number = 300;
  @Input()
  public cacheAheadOfTime: boolean = false;
  @Input()
  public dataSrc:any;
  @Input()
  public isDataStream:boolean = false;
  @Input()
  public showDescDataLength:boolean = true;
  @Output() pageChange : EventEmitter<any> = new EventEmitter();

  public readonly ASCENDING: string = 'ascending';
  public readonly DESCENDING: string = 'descending';
  public readonly NONE: string = 'none';

  public displayData: any[] = [];
  public displayCaption;
  private sorts: Sort[];

  

  //pagination
  private _currentPage:number;
  set currentPage(v:number) {
    this._currentPage = v;
    this.dataSrc.currentPage = v;
  }
  get currentPage():number {
    return this._currentPage;
  }
  _currentPageSize:number;
  set currentPageSize(v:number) {
    this._currentPageSize = v;
    this.dataSrc.currentPageSize = v;
  }
  get currentPageSize():number {
    return this._currentPageSize;
  }

  //searchFilter
  public searchFilterText: string = "";
  private searchFilterTimout;

  //contentInit, used
  contentInitiated:boolean = false;

  constructor(private elementRef: ElementRef, public viewContainer: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver, private changeDetector: ChangeDetectorRef) {
    this.sorts = [];
    this.displayData = [];
    console.log('dynamic table constructor');
  }

  ngOnInit() {
    //console.log("ngOnInit");
    console.log('dynamic table ngOnInit');
    console.log("EQRS:columns:" ,this.columns)
    this.displayCaption = this.caption;
    //console.dir(this.data);
    if(this.dataSrc == null) {
      this.dataSrc = new MemDataSource();
      this.dataSrc.dynTable = this;
      this.dataSrc.setData(this.data);
    } else {
      this.dataSrc.dynTable = this;
    }
    this.dataSrc.init();
    this.dataSrc.displayDataOb.subscribe(this.dataSrcDisplayDataOn.bind(this));
  }

  ngAfterContentInit() {
    this.contentInitiated = true;

    this._currentPage = 0;
    if (this.pagination != null) {
      this.currentPageSize = this.pagination.pageSizes[0]; //default, select first size
    }
    this.filterResults(this.searchFilterText);
  }

  public filterResults(searchText: string): void{
    //console.dir("filterResults:"+searchText);
    this.dataSrc.filterResults(searchText);
  }

  /*
  displayData iteration is called on changeDetection
    in the case of pagination, changeDetection occurs after mouseClick that changes currentPage

  in the case of async dataProvider
    this.currentPage.set should trigger rtr
      with start,end,sorts
        ajax call will trigger changeDetection
  */
  private dataSrcDisplayDataOn(data:any[]) {
    //console.log("dataSrcDisplayDataOn");
    //console.dir(data);
    this.displayData = data;
    if(this.isDataStream) {
      this.changeDetector.detectChanges();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if(typeof(changes['data']) != 'undefined' && changes['data'].currentValue != changes['data'].previousValue && this.contentInitiated){
      this.data = changes['data'].currentValue;
      this.dataSrc.setData(this.data);
      // data changes are not always displayed on table and one of the few ways of triggering
      // the data to update is to set the current page to itself which will then trigger updates
      this.currentPage = this.currentPage;
      this.setPageProps(0,this.currentPageSize);
      if(this.externalSearch && (typeof(changes['externalSearchValue']) != 'undefined')){
        this.startSearch(changes['externalSearchValue'].currentValue);
      }
      else {
        this.startSearch(this.searchFilterText);
      }
    }
    else if(this.externalSearch && typeof(changes['externalSearchValue']) != 'undefined'){
      this.startSearch(changes['externalSearchValue'].currentValue);
    }
  }

  startSearch(searchText){
    if(this.searchWaitTime <= 0) {  //if searchWaitTime is set to 0, do search automatically
      this.filterResults(searchText);
      this.searchFilterTimout = null;
    }
    else{
      if(this.searchFilterTimout) {
        clearTimeout(this.searchFilterTimout);
      }

      this.searchFilterTimout = setTimeout(() => {
        this.filterResults(searchText);
        this.searchFilterTimout = null;
      }, this.searchWaitTime);
    }

  }

  sortBy(column: DynamicColumnComponent) {
    if (!(column == null || typeof(column) == 'undefined')){ //just a resort, not changing sorting orders
      let included: boolean = false;
      if(this.multiSort) {
        for (let i = 0; i < this.sorts.length; i++) { //iterate through sorted orderings
          if (this.sorts[i].column === column) {
            included = true;
            if (this.sorts[i].order == Order.ASC) {  //if already sorted by ascending, switch to decending
              this.sorts[i].order = Order.DEC;
            }
            else {  //if decending, remove the sort
              this.sorts.splice(i, 1);
            }
            break;
          }
        }
      }
      else if(this.sorts.length != 0){
        if (this.sorts[0].column === column) {
          included = true;
          if (this.sorts[0].order == Order.ASC) {  //if already sorted by ascending, switch to decending
            this.sorts[0].order = Order.DEC;
          }
          else {  //if decending, remove the sort
            this.sorts = []; //remove previous sorting
          }
        }
        else{
          this.sorts = []; //remove sorting, will be replaced
        }
      }

      if (!included) {
        this.sorts.push(new Sort(column, Order.ASC));
      }

      this.displayCaption = this.caption + " ";
      if(this.sorts.length == 0) this.displayCaption += "unsorted";
      for (let i = 0; i < this.sorts.length; i++) {
        if(i == 0) this.displayCaption += "sorted by ";
        if(i > 0) this.displayCaption += "then by ";
        this.displayCaption += this.sorts[i].column.header + " ";
        this.displayCaption += (this.sorts[i].order == Order.ASC ? this.ASCENDING : this.DESCENDING);
        if(i < this.sorts.length-1) this.displayCaption += " ";
      }
    }
    this.dataSrc.setSorts(this.sorts);
  }

  isSorted(column: DynamicColumnComponent): string {
    for(let sort of this.sorts){
      if(sort.column == column){
        return sort.order == Order.ASC ? 'ascending' : 'descending';
      }
    }
    return this.NONE;
  }

  showFirstDotDotDot(){
    if(this.pagination.numberOfPageOptions % 2 == 0) { //even
      if(this.currentPage < this.getNumberOfPages() - 1)
        return this.currentPage - Math.floor(this.pagination.numberOfPageOptions/2) > 1;
      else
        return this.currentPage - 1 - Math.floor(this.pagination.numberOfPageOptions/2) > 1;
    }
    else
      if(this.currentPage < this.getNumberOfPages() - 1)
        return (this.currentPage - Math.floor(this.pagination.numberOfPageOptions/2)) > 1;
      else
        return (this.currentPage - 1 - Math.floor(this.pagination.numberOfPageOptions/2)) > 1;
  }

  showLastDotDotDot(){
    if(this.currentPage > 0)
      return (this.currentPage + Math.floor(this.pagination.numberOfPageOptions/2)) < (this.getNumberOfPages() - 2);
    else
      return (this.currentPage + 1 + Math.floor(this.pagination.numberOfPageOptions/2)) < (this.getNumberOfPages() - 2);
  }

  getNumberOfPages() : number{
    return Math.ceil(this.dataSrc.dataLength/this.currentPageSize);
  }

  goToNextPage(){
    if(this.currentPage < (this.getNumberOfPages() - 1)){
      this.currentPage++;
    }
    this.pageChange.emit(this.currentPage);
  }

  goToPreviousPage(){
    if(this.currentPage > 0){
      this.currentPage--;
    }
    this.pageChange.emit(this.currentPage);
  }

  isPrevDisabled(): boolean{
    return this.currentPage == 0;
  }

  isNextDisabled(): boolean{
    return this.currentPage >= this.getNumberOfPages() - 1;
  }

  changePageSize(pageSize: number){
    let topIndex = this.currentPage * this.currentPageSize;
    this.setPageProps(Math.floor(topIndex / pageSize), pageSize);
  }
  setPageProps(currentPage:number, currentPageSize:number) {
    this._currentPage = currentPage;
    this._currentPageSize = currentPageSize;
    this.dataSrc.setPageProps(currentPage, currentPageSize);
  }

  getPageOptionsArray() : number[] {
    let rVal = [];
    if(this.pagination.numberOfPageOptions % 2 == 0) {  //Even numberOfPageOptions
      if(this.currentPage < (Math.floor(this.pagination.numberOfPageOptions/2) - 1)){
        for (let i = 0; i < this.pagination.numberOfPageOptions; i++) {
          let page = i + 2;
          if(this.properPageOption(page))
            rVal.push(page);
        }
      }
      else {
        for (let i = 0; i < this.pagination.numberOfPageOptions; i++) {
          let page = this.currentPage + i - Math.floor(this.pagination.numberOfPageOptions / 2) + 1;
          if(this.properPageOption(page))
            rVal.push(page);
        }
      }
    }
    else {
      if(this.currentPage < Math.floor(this.pagination.numberOfPageOptions/2)) {
        for (let i = 0; i < this.pagination.numberOfPageOptions; i++) {
          let page = i + 2;
          if(this.properPageOption(page))
            rVal.push(page);
        }
      }
      else if(this.currentPage >= (this.getNumberOfPages() - Math.ceil(this.pagination.numberOfPageOptions/2))) {
        for (let i = 0; i < this.pagination.numberOfPageOptions; i++) {
          let page = this.getNumberOfPages() - this.pagination.numberOfPageOptions + i;
          if(this.properPageOption(page))
            rVal.push(page);
        }
      }
      else {
        for (let i = 0; i < this.pagination.numberOfPageOptions; i++) {
          let page = this.currentPage + i - Math.floor(this.pagination.numberOfPageOptions / 2) + 1;
          if(this.properPageOption(page))
            rVal.push(page);
        }
      }
    }
    return rVal;

  }

  private properPageOption(page: number): boolean{
    return ((page * this.currentPageSize) - this.dataSrc.dataLength) < this.currentPageSize
        && page > 1 //not first page
        && page != Math.ceil(this.dataSrc.dataLength / this.currentPageSize); //not last page
  }

  public selectPage(pageNum : number){
    this.currentPage = pageNum;
    this.pageChange.emit(this.currentPage);
  }

  hasExternalSearch(): boolean{
    return typeof(this.externalSearch) != 'undefined';
  }

  getPaginationDescription() : string{
    if(this.dataSrc.dataLength == 0 || this.dataSrc.dataLength == 0){
      return "Showing 0 results";
    }
    let description = "Showing ";
    let currentVal = this.currentPage * this.currentPageSize;
    description += (currentVal + 1) + " to ";
    description += this.currentPage == this.getNumberOfPages() - 1 ? this.dataSrc.dataLength : (currentVal + this.currentPageSize);
    if(this.showDescDataLength) {
      description += " of " + this.dataSrc.dataLength + " results";
    }
    return description;
  }
}
