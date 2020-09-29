import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';

import {ColorsComponent} from "./colors/colors.component";
import {IconographyComponent} from "./iconography/iconography.component";
import {TypographyComponent} from "./typography/typography.component";
import {GridComponent} from "./grid/grid.component";

import { StyleSidenavComponent } from '../style-sidenav/style-sidenav.component';


import { StyleRoutingModule } from './style-routing.module';


@NgModule({
  imports: [
    CommonModule,
    StyleRoutingModule
  ],
  declarations: [
    ColorsComponent,
    IconographyComponent,
    TypographyComponent,
    StyleSidenavComponent,
    GridComponent
  ],
  exports: [
    StyleSidenavComponent
  ]
})
export class StyleModule { }
