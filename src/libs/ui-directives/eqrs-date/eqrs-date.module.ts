import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { EqrsDateDirective } from './eqrs-date.directive';
import { InputDateComponent } from './input-date/input-date.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations:[
        EqrsDateDirective,
        InputDateComponent
    ],
    exports:[
        EqrsDateDirective,
        InputDateComponent
    ]
})

export class EqrsInputDateModule{}