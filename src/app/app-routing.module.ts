import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/compiler/src/core";
import {MainContentComponent} from "./main-content/main-content.component";

const appRoutes: Routes = [
  { path: '', component: MainContentComponent, outlet: 'home' },
  { path: '**', component: MainContentComponent }
  ];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
