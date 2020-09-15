import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EqrsDropdownComponent } from './eqrs-dropdown.component';

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations:[
        EqrsDropdownComponent
    ],
    exports:[
        EqrsDropdownComponent
    ]
})

export class EqrsDropdownModule {}