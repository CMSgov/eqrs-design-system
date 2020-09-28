import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html'
})
export class CheckboxComponent implements OnInit {

  cssLanguage = 'css';
  checkboxShow: boolean = false;
  checkboxContent: any;
  checkboxDisabledShow: boolean = false;
  checkboxDisabledContent: any;
  dateInputShow: boolean = false;
  dateInputContent: any;
  customCheckboxOneContent: string;
  customCheckboxOneShow: boolean;
  customCheckboxTwoContent: string;
  customCheckboxTwoShow: boolean;
  formGroup: FormGroup;


  checkboxOptions = [
    { value: '1', description: 'Aang' },
    { value: '2', description: 'Katara' },
    { value: '3', description: 'Saka' }
  ];

  checkboxOptionsTwo = [
    { otherValuePropertyName: '1', otherDescriptionPropertyName: 'Zuko' },
    { otherValuePropertyName: '2', otherDescriptionPropertyName: 'Uncle Iroh' },
    { otherValuePropertyName: '3', otherDescriptionPropertyName: 'Azula' }
  ];

  constructor(
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
     console.log(this.checkboxOptions)
    this.formGroup = this.fb.group({
      checkboxFormOneControl: [],
      checkboxFormTwoControl: []
    });

    this.checkboxContent = '\n' +
      '    <fieldset class="checkbox-container  row">\n' +
      '      <legend class="eqrs-label">Checkbox label</legend>\n' +
      '      <ul class="eqrs-list  col-sm-12 col-md-8 col-xl-8">\n' +
      '        <li>\n' +
      '          <input id="truth" type="checkbox" name="historical-figures-1" value="truth" checked>\n' +
      '          <label for="truth">Sojourner Truth</label>\n' +
      '        </li>\n' +
      '        <li>\n' +
      '          <input id="douglass" type="checkbox" name="historical-figures-1" value="douglass">\n' +
      '          <label for="douglass">Frederick Douglass</label>\n' +
      '        </li>\n' +
      '        <li>\n' +
      '          <input id="washington" type="checkbox" name="historical-figures-1" value="washington">\n' +
      '          <label for="washington">Booker T. Washington</label>\n' +
      '        </li>\n' +
      '      </ul>\n' +
      '    </fieldset>';
    this.checkboxDisabledContent = '\n' +
      '    <fieldset class="checkbox-container  row">\n' +
      '      <ul class="eqrs-list  col-sm-12 col-md-8 col-xl-8">\n' +
      '        <li>\n' +
      '          <input id="truth1" type="checkbox" name="historical-figures-1" value="truth" checked disabled>\n' +
      '          <label for="truth1">Sojourner Truth</label>\n' +
      '        </li>\n' +
      '        <li>\n' +
      '          <input id="douglass1" type="checkbox" name="historical-figures-1" value="douglass" disabled>\n' +
      '          <label for="douglass1">Frederick Douglass</label>\n' +
      '        </li>\n' +
      '        <li>\n' +
      '          <input id="washington1" type="checkbox" name="historical-figures-1" value="washington" disabled>\n' +
      '          <label for="washington1">Booker T. Washington</label>\n' +
      '        </li>\n' +
      '      </ul>\n' +
      '    </fieldset>';

    this.dateInputContent = '\n' +
      '    <div class="row">\n' +
      '      <div class="col-sm-8 col-md-8 col-lg-8 col-xl-8">\n' +
      '        <div class="eqrs-date  row">\n' +
      '          <div class="eqrs-month  col-xs-1 col-sm-4 col-md-4">\n' +
      '            <label>Month</label>\n' +
      '            <input type="text" placeholder="MM" [class.input-error-border]="formErrors.mailingAddrStartDateControl" formcontrolname="demoStartDateControl" aria-describedby="demo-start-date-error-message">\n' +
      '          </div>\n' +
      '          <div class="eqrs-day  col-xs-1 col-sm-4 col-md-4">\n' +
      '            <label>Day</label>\n' +
      '            <input type="text" placeholder="DD" [class.input-error-border]="formErrors.mailingAddrStartDateControl" formcontrolname="demoStartDateControl" aria-describedby="demo-start-date-error-message">\n' +
      '          </div>\n' +
      '          <div class="eqrs-year  col-xs-3 col-sm-4 col-md-4">\n' +
      '            <label>Year</label>\n' +
      '            <input type="text" placeholder="YYYY" [class.input-error-border]="formErrors.mailingAddrStartDateControl" formcontrolname="demoStartDateControl" aria-describedby="demo-start-date-error-message">\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>';

      this.customCheckboxOneContent = `
        <app-eqrs-checkbox id="someUniqueId" name="someUniqueName" formControlName="checkboxFormOneControl"
          [options]="arrayOfOptions">
        </app-eqrs-checkbox>
      `

      this.customCheckboxTwoContent = `
        <app-eqrs-checkbox id="someUniqueId" name="someUniqueName" formControlName="checkboxFormTwoControl"
          valueProperty="otherValuePropertyName" descriptionProperty="otherDescriptionPropertyName"
          [options]="arrayOfOptions" [required]="expression" disableAllSelectedValue="'3'">
        </app-eqrs-checkbox>
      `
  }

}
