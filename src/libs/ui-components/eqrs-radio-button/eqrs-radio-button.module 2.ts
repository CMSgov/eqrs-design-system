import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { EqrsRadioButtonComponent } from './eqrs-radio-button.component';



@NgModule({
    imports:[
        CommonModule
    ],
    declarations:[
        EqrsRadioButtonComponent
    ],
    exports:[
        EqrsRadioButtonComponent
    ]
})

export class EqrsRadioButtonModule {}