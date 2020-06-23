import {RouterModule, Routes, Router} from "@angular/router";
import {ModuleWithProviders} from "@angular/compiler/src/core";
import {AccessibilityComponent} from "./accessibility/accessibility.component";
import {PrinciplesComponent} from "./principles/principles.component";
import {ResponsiveDesignComponent} from "./responsive-design/responsive-design.component";
import { NgModule } from '@angular/core';

const gettingStartedRoutes: Routes = [
  { path: 'accessibility', component: AccessibilityComponent},
  { path: 'principles', component: PrinciplesComponent},
  { path: 'responsivedesign', component: ResponsiveDesignComponent},
];

@NgModule({
  imports: [RouterModule.forChild(gettingStartedRoutes)],
  exports: [RouterModule]
})

export class GettingStartedRoutingModule{}

// export const GettingStartedRoutingProviders: any[] = [];

// export const GettingStartedRouting: ModuleWithProviders = RouterModule.forRoot(gettingStartedRoutes);

