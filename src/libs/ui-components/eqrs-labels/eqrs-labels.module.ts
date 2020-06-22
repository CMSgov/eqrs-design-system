import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { EqrsLabelsComponent } from './eqrs-labels.component';

@NgModule({
    imports:[
        CommonModule
    ],
    declarations:[
        EqrsLabelsComponent
    ],
    exports:[
        EqrsLabelsComponent
    ]
})

export class EqrsLabelsModule {}