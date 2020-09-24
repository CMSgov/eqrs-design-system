import { NgModule } from '@angular/core';
import { UiDirectivesComponent } from './ui-directives.component';
import { EqrsDateDirective } from './eqrs-date/eqrs-date.directive';
import { EqrsDropdownKeyboardNavDirective } from './eqrs-dropdown-keyboard-nav/eqrs-dropdown-keyboard-nav.directive';

import { EqrsRegexDirective } from './eqrs-regex/eqrs-regex.directive';
import { CommonModule } from '@angular/common';
import { PhoneMaskModule } from './eqrs-phone-mask/phone-mask.module';

import { NumericModule } from './eqrs-numeric/numeric.module';

import { FocusOnLoadModule } from './eqrs-focus-on-load/focus-on-load.module';
import { EqrsInputDateModule } from './eqrs-date/eqrs-date.module';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    UiDirectivesComponent,
    EqrsDropdownKeyboardNavDirective,
    EqrsRegexDirective
  ],
  exports:[
    EqrsInputDateModule,
    EqrsDropdownKeyboardNavDirective,
    EqrsRegexDirective,
    PhoneMaskModule,
    NumericModule,
    FocusOnLoadModule
  ]
})
export class UiDirectivesModule { }
