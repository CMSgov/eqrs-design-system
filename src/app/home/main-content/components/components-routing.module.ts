import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/compiler/src/core";
import {AlertsComponent} from "./alerts/alerts.component";
import {ButtonsComponent} from "./buttons/buttons.component";
import {CheckboxComponent} from "./checkbox/checkbox.component";
import {AccordionComponent} from "./accordion/accordion.component";
import {DataTableComponent} from "./data-table/data-table.component";
import {DropdownComponent} from "./dropdown/dropdown.component";
import {InputsComponent} from "./inputs/inputs.component";
import {LabelsComponent} from "./labels/labels.component";
import {ModalComponent} from "./modal/modal.component";
import {ProgressIndicatorComponent} from "./progress-indicator/progress-indicator.component";
import {RadioButtonComponent} from "./radio-button/radio-button.component";
import {SearchComponent} from "./search/search.component";
import {TooltipsComponent} from "./tooltips/tooltips.component";
import {AddRemoveFieldComponent} from "./add-remove-field/add-remove-field.component";

import { NgModule } from '@angular/core';

const componentsRoutes: Routes = [
  { path: 'accordion', component: AccordionComponent},
  { path: 'alerts', component: AlertsComponent},
  { path: 'buttons', component: ButtonsComponent},
  { path: 'checkbox', component: CheckboxComponent},
  { path: 'datatable', component: DataTableComponent},
  { path: 'dropdown', component: DropdownComponent},
  { path: 'inputs', component: InputsComponent},
  { path: 'labels', component: LabelsComponent},
  { path: 'modal', component: ModalComponent},
  { path: 'progressindicator', component: ProgressIndicatorComponent},
  { path: 'radiobutton', component: RadioButtonComponent},
  { path: 'search', component: SearchComponent},
  { path: 'tooltips', component: TooltipsComponent},
  { path: 'addremovefield', component: AddRemoveFieldComponent}

];

@NgModule({
    imports: [RouterModule.forChild(componentsRoutes)],
    exports: [RouterModule]
})

export class ComponentsRoutingModule{}

// export const ComponentsRoutingProviders: any[] = [];

// export const ComponentsRouting: ModuleWithProviders = RouterModule.forRoot(componentsRoutes);

