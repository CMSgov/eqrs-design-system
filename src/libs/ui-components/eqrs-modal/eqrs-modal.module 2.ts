import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { EqrsModalComponent } from './eqrs-modal.component';


@NgModule({
    imports:[
        CommonModule
    ],
    declarations:[
        EqrsModalComponent
    ],
    exports:[
        EqrsModalComponent
    ]
})

export class EqrsModalModule {}