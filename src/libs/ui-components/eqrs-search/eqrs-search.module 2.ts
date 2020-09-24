import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { EqrsSearchComponent } from './eqrs-search.component';


@NgModule({
    imports:[
        CommonModule
    ],
    declarations:[
        EqrsSearchComponent
    ],
    exports:[
        EqrsSearchComponent
    ]
})

export class EqrsSearchModule {}