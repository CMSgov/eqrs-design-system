import { NgModule } from '@angular/core';

import { AddRemoveFieldComponent } from './add-remove-field/add-remove-field.component';
import { AlertsComponent } from './alerts/alerts.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DataTableComponent } from './data-table/data-table.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { InputsComponent } from './inputs/inputs.component';
import { LabelsComponent } from './labels/labels.component';
import { ModalComponent } from './modal/modal.component';
import { ProgressIndicatorComponent } from './progress-indicator/progress-indicator.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { SearchComponent } from './search/search.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { AccordionComponent } from './accordion/accordion.component';

import { SharedModule } from 'src/app/shared/shared.module';

import { ComponentsRoutingModule } from './components-routing.module';

import { CommonModule } from '@angular/common';
import { ComponentSidenavComponent } from '../component-sidenav/component-sidenav.component';

@NgModule({
  imports: [
    ComponentsRoutingModule,
    SharedModule,
    CommonModule,
  ],
  declarations: [
    AccordionComponent,
    AddRemoveFieldComponent,
    AlertsComponent,
    ButtonsComponent,
    CheckboxComponent,
    DataTableComponent,
    DropdownComponent,
    InputsComponent,
    LabelsComponent,
    ModalComponent,
    ProgressIndicatorComponent,
    RadioButtonComponent,
    SearchComponent,
    TooltipsComponent,
    ComponentSidenavComponent
  ],
  exports:[
    AccordionComponent,
    AddRemoveFieldComponent,
    AlertsComponent,
    ButtonsComponent,
    CheckboxComponent,
    DataTableComponent,
    DropdownComponent,
    InputsComponent,
    LabelsComponent,
    ModalComponent,
    ProgressIndicatorComponent,
    RadioButtonComponent,
    SearchComponent,
    TooltipsComponent,
    ComponentSidenavComponent
  ]
})
export class ComponentsModule { }
