import { CommonModule } from '@angular/common';
import { EqrsAccordionComponent } from './eqrs-accordion.component';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
    imports:[
        CommonModule,
        MatExpansionModule,
    ],
    declarations:[
        EqrsAccordionComponent
    ],
    exports:[
        EqrsAccordionComponent
    ]
})

export class EqrsAccordionModule{}