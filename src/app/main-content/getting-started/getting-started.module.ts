import {NgModule} from "@angular/core";
import {AccessibilityComponent} from "./accessibility/accessibility.component";
import {PrinciplesComponent} from "./principles/principles.component";
import {ResponsiveDesignComponent} from "./responsive-design/responsive-design.component";
import {GettingStartedRouting} from "./getting-started-routing.module";

@NgModule({
  imports: [
    GettingStartedRouting
  ],
  declarations: [AccessibilityComponent, PrinciplesComponent, ResponsiveDesignComponent]
})
export class GettingStartedModule { }
