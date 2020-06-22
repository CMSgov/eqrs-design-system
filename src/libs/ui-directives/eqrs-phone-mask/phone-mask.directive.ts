import { ElementRef, forwardRef, HostListener, Renderer2} from '@angular/core';
import { Directive } from '@angular/core';
import {PhoneMaskPipe} from "./phone-mask.pipe";
import {ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl} from "@angular/forms";

export const PHONE_MASK_VALUE_ACCESSOR : any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PhoneMaskDirective),
    multi: true,
};

@Directive({
    selector: '[phone]',
    providers: [PHONE_MASK_VALUE_ACCESSOR]
})

export class PhoneMaskDirective implements ControlValueAccessor{
    propagateChange = (_: any) => { };

    private el: HTMLInputElement;
    constructor(private elementRef: ElementRef, private phoneMaskPipe: PhoneMaskPipe, private renderer: Renderer2) {
        this.el = this.elementRef.nativeElement;
    }

    ngOnInit() {
        this.el.value = this.phoneMaskPipe.transform(this.el.value);
    }



    @HostListener("keyup", ["$event.target.value","$event.keyCode"])
    onKeyUp(value, keyCode) {
        if (keyCode === 8 || keyCode === 46 || keyCode === 91 || (15 < keyCode && keyCode < 19) || (37 <= keyCode && keyCode <= 40)){
            this.propagateChange(this.phoneMaskPipe.parse(this.el.value));
            return;
        }


        let caretPos = this.el.selectionStart;
        if (caretPos === 1 || caretPos === 5 || caretPos === 9) caretPos += 1;

        this.el.value = this.phoneMaskPipe.transform(value);
        this.propagateChange(this.phoneMaskPipe.parse(this.el.value));

        if (this.el.selectionStart) {
            this.el.focus();
            this.el.setSelectionRange(caretPos, caretPos);
        } else {
            this.el.focus();
        }


    }

    @HostListener('blur', []) onTouched = () => { };

    writeValue(obj: any): void {
        this.el.value = this.phoneMaskPipe.transform(obj);
    }

    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched= fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', isDisabled);
    }


}
