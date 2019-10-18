import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {
  successShow: boolean = false;
  warningShow: boolean = false;
  errorShow: boolean = false;
  errorMultilineShow: boolean = false;
  errorSinglelineShow: boolean = false;
  informationShow: boolean = false;
  htmlLanguage = 'html';
  cssLanguage = 'css';
  successStatusContent: any;
  warningStatusContent: any;
  errorStatusContent: any;
  errorMultilineContent: any;
  errorSinglelineContent: any;
  informationStatusContent: any;

  constructor() {
  }

  ngOnInit() {
    this.successStatusContent = '<div class="eqrs-alert-success  col-md-12">\n' +
      '               <div class="eqrs-alert-body">\n' +
      '                 <h4 class="eqrs-alert-heading">Success status</h4>\n' +
      '                 <p>Displays when database change is successful.</p>\n' +
      '               </div>\n' +
      '             </div>';
    this.warningStatusContent = '<div class="eqrs-alert-warning  col-md-12">\n' +
      '               <div class="eqrs-alert-body">\n' +
      '                 <h4 class="eqrs-alert-heading">Warning status</h4>\n' +
      '                 <p>Displays when database change results in error but we allow user to temporarily persist the bad data. User action will eventually be needed to correct the bad data.</p>\n' +
      '               </div>\n' +
      '             </div>';
    this.errorStatusContent = '<div class="eqrs-alert-error  col-md-12">\n' +
      '               <div class="eqrs-alert-body">\n' +
      '                 <h4 class="eqrs-alert-heading">Error status</h4>\n' +
      '                 <p>Displays when database change fails. User action needed in order to save.</p>\n' +
      '               </div>\n' +
      '             </div>';
    this.errorMultilineContent = '<div class="eqrs-alert-error  col-md-12">\n' +
      '               <div class="eqrs-alert-body">\n' +
      '                 <h4 class="eqrs-alert-heading">Error single line</h4>\n' +
      '                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>\n' +
      '                 <ul class="eqrs-single-list-item">\n' +
      '                 <li>This is item A</li>\n' +
      '                 <li>This is item B</li>\n' +
      '                 <li>This is item C</li>\n' +
      '                 </ul>\n' +
      '               </div>\n' +
      '             </div>';
    this.errorSinglelineContent = '<div class="eqrs-alert-error  col-md-12">\n' +
      '               <div class="eqrs-alert-body">\n' +
      '                 <h4 class="eqrs-alert-heading">Error single line</h4>\n' +
      '                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>\n' +
      '                 <ul class="eqrs-single-list-item">\n' +
      '                 <li>This is item A</li>\n' +
      '                 </ul>\n' +
      '               </div>\n' +
      '             </div>';
    this.informationStatusContent = '<div class="eqrs-alert-error  col-md-12">\n' +
      '               <div class="eqrs-alert-body">\n' +
      '                 <h4 class="eqrs-alert-heading">Information status</h4>\n' +
      '                <p>Displays when feedback should be provided to the user. No user action needed.</p>\n' +
      '               </div>\n' +
      '             </div>';
  }
}


