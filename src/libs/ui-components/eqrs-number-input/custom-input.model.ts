import { Input, Output, Provider, forwardRef,
    EventEmitter, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS,
    ValidationErrors, FormGroup, FormBuilder } from '@angular/forms';

import { HasValue } from './has-value.util';

export class CustomInput<T> implements ControlValueAccessor, OnInit {
@Input()
id: string = 'customInputId';

@Input()
name: string = 'customInputName';

@Input()
required: boolean = false;

@Input()
eqrsInputErrorBorder: boolean;

@Input()
ariaInvalid: boolean;

@Input()
ariaDescribedby: string = '';

@Input()
ariaLabelledby: string = '';

@Input()
ariaLabel: string = '';

@Output()
blur: EventEmitter<any> = new EventEmitter();

@Output()
change: EventEmitter<T> = new EventEmitter<T>();

public tempName: string;

// instead of overwritting the ngOnInit() just when the the { updateOn: }
// value is different lets allow us to change what the updateOn value will be
// through a property that gets set in the constructor() but is defaults to 'blur'
public updateOn: string = 'blur';
public inputForm: FormGroup;
protected _disabled: boolean;
private _value: T;

constructor(protected fb: FormBuilder) {
}

public ngOnInit(): void {
   this.inputForm = this.fb.group({
       valueControl: [this.value]
   }, { updateOn: this.updateOn });
}

public get value(): T {
   return this._value;
}

public set value(val: T) {
   this._value = val;
}

public onDisabled = () => {};
public onTouched = () => {};
public onChange = (_: any) => {};
private _propagateChange = (_: any) => {};

public propagateChange = (_: T) => {
   this._propagateChange(_);

   if (HasValue(this.change)) {
       this.change.emit(_);
   }
};

public onBlur(): void {
   if (HasValue(this.blur)) {
       this.blur.emit();
   }
}

public registerOnChange(fn: any): any {
   this.onChange = fn;
   this._propagateChange = fn;
}

public registerOnTouched(fn: any): any {
   this.onTouched = fn;
}

public setDisabledState(disable: boolean): void {
   disable ? this.inputForm.controls['valueControl'].disable() : this.inputForm.controls['valueControl'].enable();
   this._disabled = disable;
}

public writeValue(val: T) {
   this.value = val;
   if (HasValue(this.inputForm)) {
       this.inputForm.controls['valueControl'].setValue(val);
   }
}

public validate(): ValidationErrors | null {
   return null;
}
}

export function CreateNgReference(component: any): Provider {
return {
   provide: CustomInput,
   useExisting: forwardRef(() => component)
};
}

export function CreateNgValueAccessor(component: any): Provider {
return {
   provide: NG_VALUE_ACCESSOR,
   useExisting: forwardRef(() => component),
   multi: true
};
}

export function CreateNgValidator(component: any): Provider {
return {
   provide: NG_VALIDATORS,
   useExisting: forwardRef(() => component),
   multi: true
};
}