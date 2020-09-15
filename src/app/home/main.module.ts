import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { GlobalHeaderComponent } from './global-header/global-header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MainContentComponent } from './main-content/main-content.component';
import { StyleComponent } from './main-content/style/style.component';
import { RouterModule } from '@angular/router';
import { GettingStartedModule } from './main-content/getting-started/getting-started.module';
import { StyleModule } from './main-content/style/style.module';
import { ComponentsModule } from './main-content/components/components.module';
import { DirectivesModule } from './main-content/directives/directives.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [SideNavComponent, GlobalHeaderComponent, HomepageComponent, MainContentComponent, StyleComponent],
  imports: [
    CommonModule,
    RouterModule,
    GettingStartedModule,
    StyleModule,
    ComponentsModule,
    DirectivesModule,
    SharedModule
  ],
  exports:[
    HomepageComponent,
    GlobalHeaderComponent,
    MainContentComponent,
    SideNavComponent,
  ]


})
export class MainModule { }
