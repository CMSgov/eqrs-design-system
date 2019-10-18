import {ColorsComponent} from "./colors/colors.component";
import {IconographyComponent} from "./iconography/iconography.component";
import {TypographyComponent} from "./typography/typography.component";
import {NgModule} from "@angular/core";
import {StyleRouting} from "./style-routing.module";
import {PrismModule} from "@ngx-prism/core";

@NgModule({
  imports: [
    StyleRouting,
    PrismModule
  ],
  declarations: [ColorsComponent, IconographyComponent, TypographyComponent]
})
export class StyleModule { }
