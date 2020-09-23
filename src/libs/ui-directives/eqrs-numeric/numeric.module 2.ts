import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumericDirective } from './numeric.directive';

@NgModule({
    imports:[
        CommonModule
    ],
    declarations:[
        NumericDirective
    ],
    exports:[
        NumericDirective
    ]
})

export class NumericModule{}