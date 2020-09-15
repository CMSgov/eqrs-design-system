import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { EqrsTooltipsComponent } from './eqrs-tooltips.component';


@NgModule({
    imports:[
        CommonModule
    ],
    declarations:[
        EqrsTooltipsComponent
    ],
    exports:[
        EqrsTooltipsComponent
    ]
})

export class EqrsTooltipsModule {}