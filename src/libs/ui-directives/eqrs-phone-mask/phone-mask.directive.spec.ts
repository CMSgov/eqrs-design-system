/* tslint:disable:no-unused-variable */
import { PhoneMaskDirective } from './phone-mask.directive';
import {Component} from "@angular/core";
import {ComponentFixture, fakeAsync, getTestBed, TestBed, tick} from "@angular/core/testing";
import {CommonModule} from "@angular/common";
import {BrowserModule, By} from "@angular/platform-browser";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PhoneMaskPipe} from "./phone-mask.pipe";
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
@Component({
    template: `
      <form [formGroup]="form">
          <input name="xyz" formControlName="inputControl" phone>
      </form>
  `
})
class TestComponent {
    numericField = "";
    form: FormGroup;

    constructor(private formBuilder: FormBuilder){

    }

    ngOnInit(){
        this.form = this.formBuilder.group({
            inputControl:''
        })
    }
}

describe('PhoneMaskDirective', () => {
    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;
    let debugElement: any;
    let input: any;
    let caretPos= "";
    let inputEvent = document.createEvent('Event');
    inputEvent.initEvent('keyup', true, false);

    beforeEach(() => {
        TestBed.resetTestEnvironment();
        TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
        fixture = TestBed.configureTestingModule({
            imports: [
                CommonModule, BrowserModule, FormsModule, ReactiveFormsModule
            ],
            declarations: [PhoneMaskDirective, TestComponent],
            providers: [PhoneMaskPipe],
        })
            .createComponent(TestComponent);

        fixture.detectChanges();
        debugElement = fixture.debugElement;
        input = debugElement.query(By.css('input')).nativeElement;


    });
    it('should mask the phone number', fakeAsync(() => {
        input.value = '1234567890';
        input.dispatchEvent(inputEvent);
        tick();
        fixture.detectChanges();
        tick();
        expect(input.value).toBe("(123)456-7890");
    }));
    it('should replace the mask when updating the control', fakeAsync(() => {
        input.value = '1234567890';
        input.dispatchEvent(inputEvent);
        tick();
        fixture.detectChanges();
        tick();
        expect(input.value).toBe("(123)456-7890");
        expect(fixture.componentInstance.form.controls['inputControl'].value).toBe("1234567890");
    }));
    it('should store the current curser location to caretPos', fakeAsync(() => {
        caretPos = '5';
        input.value = '12345';
        input.dispatchEvent(inputEvent);
        tick();
        fixture.detectChanges();
        tick();
        expect(caretPos).toEqual('5');
        expect(input.value).toBe("(123)45");

    }));
});
