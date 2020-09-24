import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { EqrsAddRemoveFieldComponent } from './eqrs-add-remove-field.component';



@NgModule({
    imports:[
        CommonModule
    ],
    declarations:[
        EqrsAddRemoveFieldComponent
    ],
    exports:[
        EqrsAddRemoveFieldComponent
    ]
})

export class EqrsAddRemoveFieldModule {}