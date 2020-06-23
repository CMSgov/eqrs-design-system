import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  public cssLanguage = 'css';
  public dynamicTableContent: string;
  public showDynamicTable: boolean;

  

  public fakeData = [
    { id: 1, name: 'Appa' },
    { id: 2, name: 'Momo '}
  ];

  constructor() { }

  ngOnInit(): void {
    this.dynamicTableContent = `
      <dynamic-datatable [data]="fakeData"
      caption="This table contains a list of names. The data displayed for each position is listed in the following columns: Id, Name"
      [showCaption]="false" emptyMessage="No Results Found" [searchFilter]="false" [externalSearch]="false">
      <dynamic-column field="id" header="Id" id="id-column"
          [searchField]="false" [sortable]="true">
          <ng-template dynamicTemplate let-column="column" let-index="index" let-rowIndex="rowIndex"
              let-selectedName="data" type="cell">
              <div class="value" style="text-decoration: underline">
                  <a class="eqrs-view-link mt-2" attr.aria-label="View information for {{selectedName.name}}" routerLink="."
                      [id]="'name_'+rowIndex">{{selectedName.id}}</a>
              </div>
          </ng-template>
      </dynamic-column>
      <dynamic-column field="name" header="Name"
          id="name-column" [searchField]="false" [sortable]="true">
      </dynamic-column>
          <pagination [pageSizes]="[10,25,50,100]" [numberOfPageOptions]="4"></pagination>
      </dynamic-datatable>
    `;
  }

}
