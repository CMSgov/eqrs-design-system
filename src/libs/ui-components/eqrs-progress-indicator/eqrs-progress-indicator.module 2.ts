import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { EqrsProgressIndicatorComponent } from './eqrs-progress-indicator.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
    imports:[
        CommonModule,
        MatProgressSpinnerModule, 
    ],
    declarations:[
        EqrsProgressIndicatorComponent
    ],
    exports:[
        EqrsProgressIndicatorComponent
    ]
})

export class EqrsProgressIndicatorModule {}