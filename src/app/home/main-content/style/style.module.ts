import {ColorsComponent} from "./colors/colors.component";
import {IconographyComponent} from "./iconography/iconography.component";
import {TypographyComponent} from "./typography/typography.component";
import {NgModule} from "@angular/core";
import { StyleRoutingModule } from './style-routing.module';


@NgModule({
  imports: [

   StyleRoutingModule
  ],
  declarations: [ColorsComponent, IconographyComponent, TypographyComponent]
})
export class StyleModule { }
