import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/compiler/src/core";
import {ColorsComponent} from "./colors/colors.component";
import {IconographyComponent} from "./iconography/iconography.component";
import {TypographyComponent} from "./typography/typography.component";

import {NgModule} from "@angular/core";

const styleRoutes: Routes = [
  { path: '', redirectTo: '',  pathMatch: 'full'},
  { path: 'colors', component: ColorsComponent},
  { path: 'iconography', component: IconographyComponent},
  { path: 'typography', component: TypographyComponent}

];


@NgModule({
  imports: [RouterModule.forChild(styleRoutes)],
  exports: [RouterModule]
})

export class StyleRoutingModule{}
