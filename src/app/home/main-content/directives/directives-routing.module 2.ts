import {RouterModule, Routes, Router} from "@angular/router";

import { NgModule } from '@angular/core';

import {DateComponent} from "./date/date.component";
import {DropdownKeyboardNavComponent} from "./dropdown-keyboard-nav/dropdown-keyboard-nav.component";
import {FocusOnLoadComponent} from "./focus-on-load/focus-on-load.component";
import {NumericComponent} from "./numeric/numeric.component";
import {RegexComponent} from "./regex/regex.component";
import { PhoneMaskComponent } from './phone-mask/phone-mask.component';

const directiveRoutes: Routes = [
  { path: 'phonemask', component: PhoneMaskComponent},
  { path: 'date', component: DateComponent},
  { path: 'dropdownkeynav', component: DropdownKeyboardNavComponent},
  { path: 'focusonload', component: FocusOnLoadComponent},
  { path: 'numeric', component: NumericComponent},
  { path: 'regex', component: RegexComponent}
];
@NgModule({
  imports: [RouterModule.forChild(directiveRoutes)],
  exports: [RouterModule]
})

export class DirectiveRoutingModule{}