import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EqrsNumberInputComponent } from './eqrs-number-input.component';

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations:[
        EqrsNumberInputComponent
    ],
    exports:[
        EqrsNumberInputComponent
    ]
})

export class EqrsNumberInputModule {}