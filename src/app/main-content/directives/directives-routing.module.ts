import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/compiler/src/core";
import {PhoneMaskComponent} from "./phone-mask/phone-mask.component";
import {DateComponent} from "./date/date.component";
import {DropdownKeyboardNavComponent} from "./dropdown-keyboard-nav/dropdown-keyboard-nav.component";
import {FocusOnLoadComponent} from "./focus-on-load/focus-on-load.component";
import {NumericComponent} from "./numeric/numeric.component";
import {RegexComponent} from "./regex/regex.component";

const directiveRoutes: Routes = [
  { path: '', redirectTo: '',  pathMatch: 'full'},
  { path: 'phonemask', component: PhoneMaskComponent},
  { path: 'date', component: DateComponent},
  { path: 'dropdownkeynav', component: DropdownKeyboardNavComponent},
  { path: 'focusonload', component: FocusOnLoadComponent},
  { path: 'numeric', component: NumericComponent},
  { path: 'regex', component: RegexComponent}
];
export const DirectivesRoutingProviders: any[] = [];

export const DirectivesRouting: ModuleWithProviders = RouterModule.forRoot(directiveRoutes);

