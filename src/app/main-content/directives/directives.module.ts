import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PhoneMaskComponent} from "./phone-mask/phone-mask.component";
import {DirectivesRouting} from "./directives-routing.module";
import {PrismModule} from "@ngx-prism/core";
import { DateComponent } from './date/date.component';
import { FocusOnLoadComponent } from './focus-on-load/focus-on-load.component';
import { DropdownKeyboardNavComponent } from './dropdown-keyboard-nav/dropdown-keyboard-nav.component';
import { RegexComponent } from './regex/regex.component';
import { NumericComponent } from './numeric/numeric.component';

@NgModule({
  imports: [
    CommonModule, DirectivesRouting, PrismModule
  ],
  declarations: [PhoneMaskComponent, DateComponent, FocusOnLoadComponent, DropdownKeyboardNavComponent, RegexComponent, NumericComponent]
})
export class DirectivesModule { }
