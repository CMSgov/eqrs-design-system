import { Component, ElementRef, forwardRef, HostListener, 
  Input, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import {
AbstractControl,
ControlValueAccessor,
NG_VALIDATORS,
NG_VALUE_ACCESSOR,
ValidationErrors
} from '@angular/forms';

import * as moment from 'moment';

export const INPUT_DATE_VALUE_ACCESSOR: any = {
provide: NG_VALUE_ACCESSOR,
useExisting: forwardRef(() => InputDateComponent),
multi: true,
};

export const INPUT_DATE_VALIDATE_ACCESSOR: any =
{
provide: NG_VALIDATORS,
useExisting: forwardRef(() => InputDateComponent),
multi: true,
};

@Component({
selector: 'eqrs-ui-input-date',
templateUrl: './input-date.component.html',
styleUrls: ['./input-date.component.scss'],
providers: [INPUT_DATE_VALUE_ACCESSOR, INPUT_DATE_VALIDATE_ACCESSOR]
})
export class InputDateComponent implements OnInit, ControlValueAccessor {

//TODO: Need to convert static: false in future for release 9.
@ViewChild('month', { static: true }) monthElRef: ElementRef;
@ViewChild('day', { static: true }) dayElRef: ElementRef;
@ViewChild('year', { static: true }) yearElRef: ElementRef;
@Input() required: boolean = false;
@Input() minValue: string = "";
@Input() maxValue: string = "";
@Input() setErrorStyle: boolean = false;
@Input() id: string = "";
@Input() label: string = "";
@Input() uniqueList: string[] = [];
isDisabled: boolean = false;
propagateChange = (_: any) => { };
onTouched = () => { };
isValid: boolean = true;

get monthLabel(): string {
return this.label + " month";
}

get dayLabel(): string {
return this.label + " day";
}

get yearLabel(): string {
return this.label + " year";
}

get month(): string {
return this.monthElRef.nativeElement.value;
}

set month(theMonth: string) {
this.monthElRef.nativeElement.value = theMonth;
}

get day(): string {
return this.dayElRef.nativeElement.value;
}

set day(theDay: string) {
this.dayElRef.nativeElement.value = theDay;
}

get year(): string {
return this.yearElRef.nativeElement.value;
}

set year(theYear: string) {
this.yearElRef.nativeElement.value = theYear;
}

get enteredDateMomentObj(): any {
return moment(this.enteredDateString, 'YYYY-M-D', true);
}

get enteredDateString(): string {
if (this.areAllTheInputFieldsEmpty()) {
return "";
} else {
return this.year + "-" + this.month + "-" + this.day;
}

}

constructor() { }

ngOnInit() {

}


@HostListener('blur', [])
onBlur() {
this.appendZerosTOMonthAndDay();
this.onTouched();

// setTimeout(() => {
//   if (!(document.activeElement.id == this.monthElRef.nativeElement.id
//     || document.activeElement.id == this.yearElRef.nativeElement.id
//     || document.activeElement.id == this.dayElRef.nativeElement.id)) {

//     this.onTouched();
//   }
// }, 10)

}

appendZerosTOMonthAndDay() {
if (this.month && this.month.length == 1) {
this.month = '0' + this.month;
}
if (this.day && this.day.length == 1) {
this.day = '0' + this.day;
}
}

areAllTheInputFieldsProvided() {
return this.month != null && this.month.trim().length > 0 && this.day != null && this.day.trim().length > 0 && this.year != null && this.year.trim().length > 0
}

areAllTheInputFieldsEmpty() {
return (this.month == null || this.month.trim().length == 0) && (this.day == null || this.day.trim().length == 0) && (this.year == null || this.year.trim().length == 0)
}

@HostListener("input", ["$event"])
onInput(event) {
let caretPos = event.target.selectionStart;
event.target.value = event.target.value.replace(/[^0-9]/g, '');

if (this.areAllTheInputFieldsProvided()) {
this.isValid = this.enteredDateMomentObj.isValid();

} else if (!this.areAllTheInputFieldsEmpty()) {
this.isValid = false;
} else {
this.isValid = true;
}
if (this.isValid && this.areAllTheInputFieldsProvided()) {
this.propagateChange(this.enteredDateMomentObj.utc().format('YYYY-MM-DD'));
}
else {
this.propagateChange(this.enteredDateString);
}
if (event.target.value && event.target.value != '') {
event.target.setSelectionRange(caretPos, caretPos);
}
}

writeValue(obj: any): void {
let momentObj = moment(obj, 'YYYY-MM-DD');
if (!momentObj.isValid()) {
 momentObj = moment(obj, 'MM/DD/YYYY');
}

if (momentObj.isValid()) {
let date = momentObj.format();
this.year = date.slice(0, 4);
this.month = date.slice(5, 7);
this.day = date.slice(8, 10);
}
else {
this.year = "";
this.day = "";
this.month = "";
}
}

registerOnChange(fn: any): void {
this.propagateChange = fn;
}

registerOnTouched(fn: any): void {
this.onTouched = fn;
}


validate(c: AbstractControl): ValidationErrors | any {
if (this.required && this.areAllTheInputFieldsEmpty()) {
return { 'required': true };
}
if (!this.isValid) {
return {
 'date': { 'value': this.enteredDateString }
}
}
if (this.areAllTheInputFieldsProvided()) {
if (this.minValue && moment(this.minValue, 'YYYY-MM-DD', true).isValid()) {
 let minDateMomObj = moment(this.minValue, 'YYYY-MM-DD', true);
 if (this.enteredDateMomentObj.isBefore(minDateMomObj)) {
   return {
     'minDate': { 'requiredDate': this.minValue, 'actualDate': this.enteredDateString }
   }
 }
}
if (this.maxValue && moment(this.maxValue, 'YYYY-MM-DD', true).isValid()) {
 let maxDateMomObj = moment(this.maxValue, 'YYYY-MM-DD', true);
 if (this.enteredDateMomentObj.isAfter(maxDateMomObj)) {
   return {
     'maxDate': { 'requiredDate': this.maxValue, 'actualDate': this.enteredDateString }
   }
 }
}
if (this.uniqueList && this.uniqueList.length > 0) {
 if (this.uniqueList.find(x => x === this.enteredDateString)) {
   return {
     'uniqueDate': `A status with an effective start date of ${this.enteredDateString}. Please select a different date`
   }
 }

}
}
return null;

}

setDisabledState(isDisabled: boolean): void {
(<HTMLInputElement>this.monthElRef.nativeElement).disabled = isDisabled;
(<HTMLInputElement>this.dayElRef.nativeElement).disabled = isDisabled;
(<HTMLInputElement>this.yearElRef.nativeElement).disabled = isDisabled;

this.isDisabled = isDisabled;
}
}

