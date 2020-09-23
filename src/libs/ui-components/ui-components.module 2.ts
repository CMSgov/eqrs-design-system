import { NgModule } from '@angular/core';

import { EqrsAccordionModule } from './eqrs-accordion/eqrs-accordion.module';
import { EqrsAddRemoveFieldModule } from './eqrs-add-remove-field/eqrs-add-remove-field.module';
import { EqrsAlertsModule } from './eqrs-alerts/eqrs.alerts.module';
import { EqrsButtonsModule } from './eqrs-buttons/eqrs-buttons.module';
import { EqrsDatatableModule } from './eqrs-data-table/eqrs-data-table.module';
import { EqrsProgressIndicatorModule } from './eqrs-progress-indicator/eqrs-progress-indicator.module';
import { EqrsInputModule } from './eqrs-input/eqrs-input.module';
import { EqrsLabelsModule } from './eqrs-labels/eqrs-labels.module';
import { EqrsModalModule } from './eqrs-modal/eqrs-modal.module';
import { EqrsSearchModule } from './eqrs-search/eqrs-search.module';
import { EqrsTooltipsModule } from './eqrs-tooltips/eqrs-tooltips.module';
import { EqrsCheckBoxModule } from './eqrs-checkbox/eqrs-checkbox.module';
import { EqrsRadioButtonModule } from './eqrs-radio-button/eqrs-radio-button.module';
import { EqrsDropdownModule } from './eqrs-dropdown/eqrs-dropdown.module';
import { EqrsNumberInputModule } from './eqrs-number-input/eqrs-number-input.module';

import { CommonModule } from '@angular/common';




@NgModule({
  imports: [
   CommonModule
  ],
  declarations: [ 
  ],
  exports:[
    EqrsAccordionModule,
    EqrsAlertsModule,
    EqrsAddRemoveFieldModule,
    EqrsButtonsModule,
    EqrsCheckBoxModule,
    EqrsDatatableModule,
    EqrsDropdownModule,
    EqrsInputModule,
    EqrsLabelsModule,
    EqrsModalModule,
    EqrsNumberInputModule,
    EqrsProgressIndicatorModule,
    EqrsRadioButtonModule,
    EqrsSearchModule,
    EqrsTooltipsModule
  ],
  providers:[]
})
export class UiComponentsModule { }
