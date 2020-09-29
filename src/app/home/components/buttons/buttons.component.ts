import { Component, OnInit } from '@angular/core';

export enum EqrsButtonTypes {
  Primary = 'Primary',
  Secondary = 'Secondry',
  Link = 'Link',
  Accent = 'Accent',
  Destructive = 'Destructive',
}

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html'
})
export class ButtonsComponent implements OnInit {
  cssLanguage = 'css';
  EqrsButtonTypes = EqrsButtonTypes;
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
  customButtonShow: boolean;
  customButtonContent: string;
  customButtonTwoShow: boolean;
  customButtonTwoContent: string;

  constructor() { }

  ngOnInit(): void {
    this.primaryButtonContent = '<app-eqrs-buttons [eqrsType]="EqrsButtonTypes.Primary">Submit</app-eqrs-buttons>\n' +
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

    this.buttonlinksButtonContent = '<eqrs-button id="linkUniqueId" name="linkUniqueName" [eqrsType]="EqrsButtonTypes.Link">This is a button not a link</eqrs-button>';

    this.customButtonContent = `<eqrs-button id="someUniqueId" name="someUniqueName">Submit</eqrs-button>`;

    this.customButtonTwoContent = `<eqrs-button id="someUniqueId" name="someUniqueName" [eqrsType]="EqrsButtonTypes.Secondary">Cancel</eqrs-button>`;
  }

}
