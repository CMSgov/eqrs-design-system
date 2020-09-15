import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhoneMaskPipe } from './phone-mask.pipe';
import { PhoneMaskDirective } from './phone-mask.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        PhoneMaskDirective,
        PhoneMaskPipe
    ],
    providers: [
        PhoneMaskPipe
    ],
    exports: [
        PhoneMaskDirective, 
        PhoneMaskPipe
    ]
})
export class PhoneMaskModule { }