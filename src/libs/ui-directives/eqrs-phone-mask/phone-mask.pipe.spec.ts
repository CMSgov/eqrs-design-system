/* tslint:disable:no-unused-variable */
import { PhoneMaskPipe } from './phone-mask.pipe';

import {ComponentFixture, getTestBed, TestBed} from "@angular/core/testing";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {Component} from "@angular/core";

@Component({
    template: `
      <span id="output">{{output | phone}}</span>
  `
})
class TestComponent {
    output = "";
    constructor(){

    }
}

describe('PhoneMaskPipe', () => {
    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;
    let debugElement: any;
    let input: any;
    let inputEvent = document.createEvent('Event');
    inputEvent.initEvent('input', true, false);

    beforeEach(() => {
        getTestBed().resetTestingModule();

        fixture = TestBed.configureTestingModule({
            imports: [
                CommonModule,BrowserModule
            ],
            declarations: [TestComponent,PhoneMaskPipe]
        })
            .createComponent(TestComponent);

        fixture.detectChanges();
        debugElement = fixture.debugElement;
    });
    it('create an instance', () => {
        const pipe = new PhoneMaskPipe();
        expect(pipe).toBeTruthy();
    });
    it('should accept only numbers', () => {
        const pipe = new PhoneMaskPipe();
        expect(pipe.transform('1234d6')).toBe('(123)46');
    });
    it('should mask phone number', () => {
        const pipe = new PhoneMaskPipe();
        expect(pipe.transform('1234567890')).toBe('(123)456-7890');
    });
    it('should unmask phone number', () => {
        const pipe = new PhoneMaskPipe();
        expect(pipe.parse('(123)456-7890')).toBe('1234567890');
    });
    it('should mask phone number when used with pipe', () => {
        fixture.componentInstance.output='1234567890';
        fixture.detectChanges();
        expect(document.getElementById('output').textContent).toBe('(123)456-7890');
    });
});
