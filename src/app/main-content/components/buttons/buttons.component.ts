import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  cssLanguage = 'css';
  primaryButtonShow: boolean = false;
  primaryButtonContent: any;
  secondaryButtonShow: boolean = false;
  secondaryButtonContent: any;
  accentButtonShow: boolean = false;
  accentButtonContent: any;
  destructiveButtonShow: boolean = false;
  destructiveButtonContent: any;
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
    this.primaryButtonContent = '<button class="eqrs-button-primary">Submit</button>\n' +
      '             <button class="eqrs-button-primary primary-hover">Submit</button>\n' +
      '             <button class="eqrs-button-primary primary-active">Submit</button>';

    this.secondaryButtonContent = '<button class="eqrs-button-secondary">Cancel</button>\n' +
      '             <button class="eqrs-button-secondary eqrs-button-secondary-hover">Cancel</button>\n' +
      '             <button class="eqrs-button-secondary eqrs-button-secondary-active">Cancel</button>' ;

    this.accentButtonContent = '<button class="eqrs-button-accent">Submit</button>\n' +
      '             <button class="eqrs-button-accent accent-hover">Submit</button>\n' +
      '             <button class="eqrs-button-accent accent-active">Submit</button>';

    this.destructiveButtonContent = '<button class="eqrs-button-destructive">Delete</button>\n' +
      '             <button class="eqrs-button-destructive eqrs-button-destructive-hover">Delete</button>\n' +
      '             <button class="eqrs-button-destructive eqrs-button-destructive-active">Delete</button>';

    this.disabledButtonContent = '<button class="eqrs-button-primary" disabled="">Disabled button</button>';

    this.exlayout1ButtonContent = '<button class="eqrs-button-destructive">Delete</button>\n' +
      '             <button class="eqrs-button-secondary">Cancel</button>\n' +
      '             <button class="eqrs-button-primary">Save</button>\n' +
      '             <button class="eqrs-button-accent" disabled="">Submit</button>';

    this.exlayout2ButtonContent = '<button class="eqrs-button-secondary focus">Cancel</button>\n' +
      '             <button class="eqrs-button-destructive">Delete</button>';

    this.buttonlinksButtonContent = '<button class="eqrs-edit-link">This is a button not a link</button>';
  }

}
