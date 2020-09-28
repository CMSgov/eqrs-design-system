import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { GlobalHeaderComponent } from './global-header/global-header.component';
import { GlobalFooterComponent } from './global-footer/global-footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MainContentComponent } from './main-content/main-content.component';
import { StyleComponent } from './style/style.component';
import { RouterModule } from '@angular/router';
import { GettingStartedModule } from './main-content/getting-started/getting-started.module';
import { StyleModule } from './style/style.module';

import { ComponentsModule } from './components/components.module';

import { DirectivesModule } from './main-content/directives/directives.module';
import { SharedModule } from '../shared/shared.module';

//newbies
import { GettingStartedComponent } from './main-content/getting-started/getting-started.component';

import { ComponentsComponent } from './components/components.component';

import { GovernanceComponent } from './main-content/governance/governance.component';
import { AboutComponent } from './main-content/about/about.component';
import { ComponentSidenavComponent } from './component-sidenav/component-sidenav.component';


@NgModule({
  declarations: [
    SideNavComponent,
    GettingStartedComponent,
    GlobalHeaderComponent,
    GlobalFooterComponent,
    HomepageComponent,
    MainContentComponent,
    StyleComponent,
    ComponentsComponent,
    AboutComponent,
    GovernanceComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    GettingStartedModule,
    StyleModule,
    ComponentsModule,
    DirectivesModule,
    SharedModule,

  ],
  exports:[
    HomepageComponent,
    GlobalHeaderComponent,
    GlobalFooterComponent,
    MainContentComponent,
    SideNavComponent,
  ]


})
export class MainModule { }
