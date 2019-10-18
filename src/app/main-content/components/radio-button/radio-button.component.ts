import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent implements OnInit {

  cssLanguage = 'css';
  radioShow: boolean = false;
  radioShowContent: any;
  radioDisabledShow: boolean =false;
  radioDisabledContent: any;

  constructor() { }

  ngOnInit() {
    this.radioShowContent =

      '<legend class="eqrs-label">Radio label (legend)</legend>\n' +
      '         <ul class="eqrs-list">\n' +
      '           <li>\n' +
      '             <input id="stanton" type="radio" name="historical-figures-2" value="stanton">\n' +
      '             <label for="stanton">Elizabeth Cady Stanton</label>\n' +
      '           </li>\n' +
      '           <li>\n' +
      '             <input id="anthony" type="radio" name="historical-figures-2" value="anthony">\n' +
      '             <label for="anthony">Susan B. Anthony</label>\n' +
      '           </li>\n' +
      '           <li>\n' +
      '             <input id="tubman" type="radio" name="historical-figures-2" value="tubman">\n' +
      '             <label for="tubman">Harriet Tubman</label>\n' +
      '           </li>\n' +
      '         </ul>';

    this.radioDisabledContent = ' \n' +
    '<legend class="eqrs-label">Radio label (legend)</legend>\n' +
      ' <ul class="eqrs-list">\n' +
      '     <li>\n' +
      '       <input id="stanton-disabled-2" type="radio" checked name="historical-figures-3" value="stanton-disabled-2" disabled>\n' +
      '       <label for="stanton-disabled-2">Elizabeth Cady Stanton</label>\n' +
      '     </li>\n' +
      '     <li>\n' +
      '       <input id="anthony-disabled-2" type="radio" name="historical-figures-3" value="anthony-disabled-2" disabled>\n' +
      '       <label for="anthony-disabled-2">Susan B. Anthony</label>\n' +
      '     </li>\n' +
      '     <li>\n' +
      '       <input id="tubman-disabled-2" type="radio" name="historical-figures-3" value="tubman-disabled-2" disabled>\n' +
      '       <label for="tubman-disabled-2">Harriet Tubman</label>\n' +
      '     </li>\n' +
      '   </ul>';

  }
}
