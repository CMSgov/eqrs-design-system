import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { EqrsAlertsComponent } from './eqrs-alerts.component';


@NgModule({
    imports:[
        CommonModule
    ],
    declarations:[
        EqrsAlertsComponent
    ],
    exports:[
        EqrsAlertsComponent
    ]
})

export class EqrsAlertsModule {}