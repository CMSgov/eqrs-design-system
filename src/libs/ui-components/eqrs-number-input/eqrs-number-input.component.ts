import { Component, Input, OnInit, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, ValidationErrors } from '@angular/forms';

import { CustomInput, CreateNgValidator, 
  CreateNgValueAccessor } from './custom-input.model';

import { HasValue } from './has-value.util';

/**
 * @classdesc a number only input that will prevent anything but numbers and a decimal to be entered.  
 * The format of the value can be set as well as the min and max values
 */


@Component({
  selector: 'app-eqrs-number-input',
  templateUrl: './eqrs-number-input.component.html',
  styleUrls: ['./eqrs-number-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        CreateNgValueAccessor(EqrsNumberInputComponent),
        CreateNgValidator(EqrsNumberInputComponent)
    ]
})
export class EqrsNumberInputComponent extends CustomInput<number> implements OnInit {

  public decimalIndex: number = -1;
  public integerLength: number;
  public decimalLength: number;
  private previousValue: string;
    
    /**
     * @description Format the user wants the input to be in. Only excepts X for number
     * and one . for a decimal place
     * @example XX.XX (12.34) X.XXX (1.234) XXX (123) 
     */
  @Input()
    format: string;

    /**
     * @description Minimum value accepted
     */
  @Input()
    minValue: number;

    /**
     * @description Maximum value accepted
     */
   @Input()
    maxValue: number;

  constructor(fb: FormBuilder) {
        super(fb);
    }

    public ngOnInit(): void {
      super.ngOnInit();
      
      this.setFormatValues();
  }

  /**
   /* @description In order to diplay the values correctly we need to use a string
   */
  public get inputValue(): string|null {
      let val = null;

      if (HasValue(this.inputForm)) {
          val = this.inputForm.controls['valueControl'].value;
      }

      return val;
  }

  public set inputValue(value: string) {
      if (HasValue(this.inputForm)) {
          this.inputForm.controls['valueControl'].setValue(HasValue(value) ? value : null);
          this.value = HasValue(value) ? +value : null;
      }
  }

  public writeValue(value: number) {
      this.inputValue = this.formatValue(HasValue(value) ? value.toString(): null);
  }

  public onBlur(): void {
      super.onBlur();
      this.onTouched();
  }

  /**
   * @description Captures every input by the user and checks to make sure every input
   * is valid i.e. only numbers, one decimal allowed
   */
  @HostListener('input', ['$event'])
  onInput(event) {
      const numsOnly: RegExp = /^[0-9]+$/;
      
      if (!HasValue(event.data) || event.data.match(numsOnly)) {
          this.inputValue = this.formatValue(event.target.value);
          this.previousValue = this.inputValue;
      }
      else if (event.data !== '.' || 
          (event.data === '.' && (this.decimalIndex < 0 || 
          this.inputValue.indexOf('.') !== this.inputValue.lastIndexOf('.')))) {
          
          this.inputValue = this.previousValue;
      }
      else {
          this.previousValue = this.inputValue;
      }

      this.propagateChange(this.value);
  }

  /**
   * @param value: string - value that gets formatted based on this.format if it exists, if not then
   * the value is returned as is
   */
  private formatValue(value: string): string {
      let result: string;
      let decimalValue: string = '';
      let integerValue: string = '';

      if (HasValue(this.format) && HasValue(value)) {
          let valDecimalIndex = value.indexOf('.');

          if (this.decimalIndex >= 0 && valDecimalIndex >= 0) {
              let dv = value.substring(valDecimalIndex + 1, value.length);
              decimalValue = (dv.length <= this.decimalLength) ? '.' + dv : '.' + dv.substring(0, this.decimalLength);
          }

          let iv = value.substring(0, valDecimalIndex >= 0 ? valDecimalIndex : value.length);
          integerValue = (iv.length <= this.integerLength) ? iv : iv.substring(0, this.integerLength);

          result = (integerValue.length == 0 && decimalValue.length == 0) ?
              '' : `${integerValue}${decimalValue}`;
      }

      return result;
  }

  public validate(): ValidationErrors | null {
      if (this.required && !HasValue(this.value)) {
          return { 'required': true };
      }
      else if (HasValue(this.minValue) && HasValue(this.value) && this.value < this.minValue) {
          return { 'minValue': true };
      }
      else if (HasValue(this.maxValue) && HasValue(this.value) && this.value > this.maxValue) {
          return { 'maxValue': true };
      }

      return null;
  }

  private setFormatValues(): void {
      if (HasValue(this.format)) {
          this.decimalIndex = this.format.indexOf('.');
          this.integerLength = this.decimalIndex >= 0 ? this.format.substring(0, this.decimalIndex).length : this.format.length;
          this.decimalLength = this.format.substring(this.decimalIndex + 1, this.format.length).length;
      }
  }
}
