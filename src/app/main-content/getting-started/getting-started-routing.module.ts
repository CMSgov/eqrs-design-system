import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/compiler/src/core";
import {AccessibilityComponent} from "./accessibility/accessibility.component";
import {PrinciplesComponent} from "./principles/principles.component";
import {ResponsiveDesignComponent} from "./responsive-design/responsive-design.component";

const gettingStartedRoutes: Routes = [
  { path: '', redirectTo: '',  pathMatch: 'full'},
  { path: 'accessibility', component: AccessibilityComponent},
  { path: 'principles', component: PrinciplesComponent},
  { path: 'responsivedesign', component: ResponsiveDesignComponent},
];
export const GettingStartedRoutingProviders: any[] = [];

export const GettingStartedRouting: ModuleWithProviders = RouterModule.forRoot(gettingStartedRoutes);

