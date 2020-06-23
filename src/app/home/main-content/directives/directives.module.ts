import { NgModule } from '@angular/core';

import { DirectiveRoutingModule } from './directives-routing.module';
import { DateComponent } from './date/date.component';
import { DropdownKeyboardNavComponent } from './dropdown-keyboard-nav/dropdown-keyboard-nav.component';
import { FocusOnLoadComponent } from './focus-on-load/focus-on-load.component';
import { NumericComponent } from './numeric/numeric.component';
import { PhoneMaskComponent } from './phone-mask/phone-mask.component';
import { RegexComponent } from './regex/regex.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [
    DirectiveRoutingModule,
    SharedModule,
    CommonModule
  ],
  declarations: [
    DateComponent,
    DropdownKeyboardNavComponent,
    FocusOnLoadComponent,
    NumericComponent,
    PhoneMaskComponent,
    RegexComponent
  ]
})
export class DirectivesModule { }
