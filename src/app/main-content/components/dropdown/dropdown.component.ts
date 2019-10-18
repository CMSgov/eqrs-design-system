import { Component, OnInit } from '@angular/core';
import {NgbDropdown} from "@ng-bootstrap/ng-bootstrap";
import {NgbDropdownToggle} from "@ng-bootstrap/ng-bootstrap/dropdown/dropdown";
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  cssLanguage = 'css';
  dropdownButtonShow: boolean = false;
  dropdownButtonContent: any;
  dropdown: NgbDropdown;
  constructor() { }

  ngOnInit() {
    this.dropdownButtonContent = '<div class="dropdown" ngbDropdown>\n' +
      '               <button ngbDropdownToggle class="btn btn-secondary dropdown-toggle eqrs-button-dropdown" type="button" id="dropdownMenuButton" data-toggle="dropdown">\n' +
      '                 <div class="dropdown-menu eqrs-button-dropdown-menu" aria-labelledby="dropdownMenuButton">\n' +
      '                 <a class="dropdown-item" href="#"><i class="fa fa-plus" aria-hidden="true"></i>  Facility</a>\n' +
      '                 </div>\n' +
      '                 </div>\n' +
      '             </div>' ;
  }

}
