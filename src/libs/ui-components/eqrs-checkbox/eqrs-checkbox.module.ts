import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EqrsCheckboxComponent } from './eqrs-checkbox.component';
import { UiPipesModule } from '../../ui-pipes/ui-pipes.module';



@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        UiPipesModule
    ],
    declarations:[
        EqrsCheckboxComponent
    ],
    exports:[
        EqrsCheckboxComponent
    ]
})

export class EqrsCheckBoxModule{}