import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { EqrsButtonsComponent } from './eqrs-buttons.component';


@NgModule({
    imports:[
        CommonModule
    ],
    declarations:[
        EqrsButtonsComponent
    ],
    exports:[
        EqrsButtonsComponent
    ]
})

export class EqrsButtonsModule {}