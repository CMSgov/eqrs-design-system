import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {
  cssLanguage = 'css';
  inputInactiveShow: boolean = false;
  inputInactiveContent: any;
  inputFocusShow: boolean = false;
  inputFocusContent: any;
  inputSuccessShow: boolean = false;
  inputSuccessContent: any;
  inputErrorShow: boolean = false;
  inputErrorContent: any;
  disabledButtonShow: boolean = false;
  disabledButtonContent: any;
  exlayout1ButtonShow: boolean = false;
  exlayout1ButtonContent: any;
  exlayout2ButtonShow: boolean = false;
  exlayout2ButtonContent: any;
  buttonlinksButtonShow: boolean = false;
  buttonlinksButtonContent: any;

  constructor() { }

  ngOnInit() {
    this.inputInactiveContent = '<div class="eqrs-input-container">\n' +
      '               <label class="eqrs-label" for="input-inactive">Label</label>\n' +
      '                 <input class="eqrs-input" id="input-inactive" name="input-inactive" type="text" aria-describedby="input-inactive">\n' +
      '             </div>' ;

    this.inputFocusContent = '<div class="eqrs-input-container">\n' +
      '               <label class="eqrs-label" for="input-inactive">Label</label>\n' +
      '                 <input class="input-focus focus" id="input-inactive" name="input-inactive" type="text" aria-describedby="input-inactive">\n' +
      '             </div>' ;

    this.inputSuccessContent = '<div class="eqrs-input-container">\n' +
      '               <label class="eqrs-label" for="input-inactive">Label</label>\n' +
      '                 <input class="eqrs-input" id="input-inactive" name="input-inactive" type="text" aria-describedby="input-inactive">\n' +
      '             </div>';

    this.inputErrorContent = '<label class="eqrs-label-error" for="input-error">Label</label>\n' +
      '               <div class="row">\n' +
      '                 <div class="eqrs-input-container d-flex">\n' +
      '                 <div class="col-md-6">\n' +
      '                 <input class="eqrs-input-error-border" id="input-error-1" name="input-error-1" type="text" aria-describedby="input-error-message"></div>\n' +
    '                 <div class="col-md-6">\n' +
    '                 <span class="eqrs-input-error-message" id="input-error-message" role="alert">This is a short helpful error message that should be approximately 66 characters per line.</span> </div>\n' +
    '                 </div>\n' +
      '             </div>';

    this.disabledButtonContent = '<button class="eqrs-button-primary" disabled="">Disabled button</button>';

    this.exlayout1ButtonContent = '<button class="eqrs-button-destructive">Delete</button>\n' +
      '               <button class="eqrs-button-secondary">Cancel</button>\n' +
      '                <button class="eqrs-button-primary">Save</button>\n' +
      '                 <button class="eqrs-button-accent" disabled="">Submit</button>';

    this.exlayout2ButtonContent = '<button class="eqrs-button-secondary focus">Cancel</button>\n' +
      '                 <button class="eqrs-button-destructive">Delete</button>';

    this.buttonlinksButtonContent = '<button class="eqrs-edit-link">This is a button not a link</button>';
  }

}
