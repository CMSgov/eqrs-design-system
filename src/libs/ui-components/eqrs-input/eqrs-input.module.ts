import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { EqrsInputComponent } from './eqrs-input.component';

@NgModule({
    imports:[
        CommonModule
    ],
    declarations:[
        EqrsInputComponent
    ],
    exports:[
        EqrsInputComponent
    ]
})

export class EqrsInputModule {}