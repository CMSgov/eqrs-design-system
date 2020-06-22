import { Component, Input, OnInit, ChangeDetectionStrategy, ViewChildren, QueryList, ElementRef,
        Renderer2
} from '@angular/core';
import { FormBuilder, ValidationErrors } from '@angular/forms';

import { HasValue } from './has-value.util';

import { CustomInput, CreateNgValidator, 
         CreateNgValueAccessor } from './custom-input.model';

export class LookupModel {
    constructor(public value: string|number = '', public description: string = '') { }
}
        
@Component({
  selector: 'app-eqrs-checkbox',
  templateUrl: './eqrs-checkbox.component.html',
  styleUrls: ['./eqrs-checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        CreateNgValueAccessor(EqrsCheckboxComponent),
        CreateNgValidator(EqrsCheckboxComponent)
    ]
})
export class EqrsCheckboxComponent extends CustomInput<string[]> implements OnInit {

  /**
     * @description Array of objects that will be setting the
     * description and value of the checkboxes
     */
    @Input()
    options: LookupModel[]|any[] = [];

    /**
     * @description Name of the value property to be set on the 
     * checkbox input value
     * @default value
     */
    @Input()
    valueProperty: string = 'value';

    /**
     * @description Name of description property to be displayed 
     * next to checkbox
     * @default description
     */
    @Input()
    descriptionProperty: string = 'description';

    /**
     * @description Resets values when checkboxes are disbaled 
     * @default true
     */
    @Input()
    resetValuesOnDisable: boolean = true;

    /**
     * @optional
     * @description Value from this.options that if selected all
     * other checkboxes will be unchecked and disabled
     */
    @Input()
    disableAllSelectedValue: string;

    /**
     * @description QueryList of checkbox elementRef's that are
     * used to disable, enable, check, and uncheck specific checkoboxes
     */
    @ViewChildren('checkbox')
    checkboxes: QueryList<ElementRef>;

    constructor(fb: FormBuilder, private renderer: Renderer2) {
        super(fb);
        this.tempName = 'checkbox-input';
        this.value = [];
    }

    public writeValue(val: string[]) {
        if (HasValue(this.value) && HasValue(val)) {
            this.value.push(...val);
        }
    }

    /**
     * @description Adds or removes the selected value to this.value
     */
    public addOrRemoveValue(value: string): void {
        const index = this.value.indexOf(value);

        if (index >= 0) {
            // enable all inputs
            this.value.splice(index, 1);
            this.enableCheckboxes();
        }
        else {
            // remove all values from this.value
            // disable all inputs but the input witht he selected value
            this.removeValuesAndDisable(value);
            this.value.push(value);
        }

        this.propagateChange(this.value);
    }

    public setDisabledState(disable: boolean): void {
        if (this.inputForm) {
            if (disable && this.resetValuesOnDisable) {
                this.value = [];
                this.inputForm.reset();
                this.inputForm.disable();
                this.propagateChange(this.value);
            } else if (disable) {
                this.inputForm.disable();
            } else {
                this.inputForm.enable();
            }
        }
    }

    public validate(): ValidationErrors | null {
        if (this.required && !HasValue(this.value)) {
            return { 'required': true };
        }

        return null;
    }

    /**
     * @description if this.disableAllSelectedValue has value and it matches the value selected
     * then empty this.value and set all other checkboxes to unchecked and disabled
     */
    private removeValuesAndDisable(value: string): void {
        if (HasValue(this.disableAllSelectedValue) && this.disableAllSelectedValue === value) {
            this.value = [];
            this.checkboxes.forEach((cb: ElementRef) => {
                if (cb.nativeElement.value !== value) {
                    this.renderer.setProperty(cb.nativeElement, 'checked', false);
                    this.renderer.setAttribute(cb.nativeElement, 'disabled', 'true');
                }
            });
        }
    }

    /**
     * @description re-enable all checkbox inputs if this.disableAllSelectedValue has value
     */
    private enableCheckboxes(): void {
        if (HasValue(this.disableAllSelectedValue)) {
            this.inputForm.reset();
            this.inputForm.enable();
        }
    }

}
