import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, ValidationErrors } from '@angular/forms';

import { CustomInput, CreateNgValidator, 
  CreateNgValueAccessor } from './custom-input.model';

import { HasValue } from './has-value.util';

export interface Form2728ReferenceType {
    referenceCode?: string;
    referenceTypeCode?: string; // *_TYPE_CD;
    referenceTypeDesc?: string; // *_TYPE_DESC;
    activeSwitch?: string; // ACTV_SW
    sortOrderNumber?: number;
    displayFormText?: string;
    description?: string;
}
export class LookupModel {
  constructor(public value: string|number = '', public description: string = '') { }
}


 
@Component({
  selector: 'app-eqrs-dropdown',
  templateUrl: './eqrs-dropdown.component.html',
  styleUrls: ['./eqrs-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        CreateNgValueAccessor(EqrsDropdownComponent),
        CreateNgValidator(EqrsDropdownComponent)
    ]
})
export class EqrsDropdownComponent extends CustomInput<string | number> implements OnInit{

  @Input()
    options: Form2728ReferenceType[]|LookupModel[]|any[] = [];

  @Input()
    idName: string = 'value';    //'referenceTypeCode';

  @Input()
    descriptionName: string = 'description';    //'referenceTypeDesc'

  constructor(
    fb: FormBuilder
  ) {
    super(fb);
    this.updateOn = 'change';
    this.tempName = 'select-input'
   }

  public ngOnInit(): void{
    super.ngOnInit();
        
        // For some reason when using this component on a form the formControl doesn't have its value
        // updated until a blur event happens so I subscribed to the value changes to properly update the 
        // formControl value.  The "updateOn: 'blur'" should only be for checking validation
        this.inputForm.controls['valueControl'].valueChanges.subscribe(val => {
            this.value = val;
            this.propagateChange(this.value);
        });
  }

  public setDisabledState(disable: boolean): void {
    if (this.inputForm) {
        if (disable) {
            this.value = '';
            this.inputForm.reset();
            this.inputForm.disable();
            this.propagateChange(this.value);
        }
        else {
            this.inputForm.enable();
        }
    }
  }

  public validate(): ValidationErrors|null {
    if (this.required && !HasValue(this.value)) {
      return { 'required': true };
    }

    return null;
  }

}
