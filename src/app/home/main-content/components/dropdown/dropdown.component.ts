import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import {NgbDropdown} from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html'
})

export class DropdownComponent implements OnInit {

  cssLanguage = 'css';
  dropdownButtonShow: boolean = false;
  dropdownButtonContent: any;
  dropdown: NgbDropdown;
  selectInputOneShow: boolean;
  selectInputOneContent: string;
  selectInputTwoShow: boolean;
  selectInputTwoContent: string;
  formGroup: FormGroup;

  selectOptions = [
    { value: '1', description: 'Aang' },
    { value: '2', description: 'Katara' },
    { value: '3', description: 'Saka' }
  ];

  selectOptionsTwo = [
    { referenceTypeCode: '1', referenceTypeDesc: 'Aang' },
    { referenceTypeCode: '2', referenceTypeDesc: 'Katara' },
    { referenceTypeCode: '3', referenceTypeDesc: 'Saka' }
  ];

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      selectFormOneControl: '',
      selectFormTwoControl: ''
    });

    this.dropdownButtonContent = '<div class="dropdown" ngbDropdown>\n' +
      '               <button ngbDropdownToggle class="btn btn-secondary dropdown-toggle eqrs-button-dropdown" type="button" id="dropdownMenuButton" data-toggle="dropdown">\n' +
      '                 <div class="dropdown-menu eqrs-button-dropdown-menu" aria-labelledby="dropdownMenuButton">\n' +
      '                 <a class="dropdown-item" href="#"><i class="fa fa-plus" aria-hidden="true"></i>  Facility</a>\n' +
      '                 </div>\n' +
      '                 </div>\n' +
      '             </div>' ;

      this.selectInputOneContent = `
        <app-eqrs-dropdown id="uniqueId" name="uniqueName" formControlName="selectFormOneControl" [options]="selectOptions">
        </app-eqrs-dropdown>
      `;

      this.selectInputTwoContent = `
        <app-eqrs-dropdown id="uniqueId" name="uniqueName" formControlName="selectFormTwoControl" [options]="selectOptions"
          (change)="onChange()" ariaLabel="Some label">
        </app-eqrs-dropdown>
      `;

  }

  onChange(){
      console.log("dropdown value change")
  }

}
