import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainContentComponent } from './main-content/main-content.component';
import {MatTabsModule} from '@angular/material/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { GettingStartedComponent } from './main-content/getting-started/getting-started.component';
import { StyleComponent } from './main-content/style/style.component';
import { ComponentsComponent } from './main-content/components/components.component';
import {StyleModule} from "./main-content/style/style.module";
import {GettingStartedModule} from "./main-content/getting-started/getting-started.module";
import {routing} from "./app-routing.module";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ComponentsModule} from "./main-content/components/components.module";
import { PrismModule } from '@ngx-prism/core';
import { DirectivesComponent } from './main-content/directives/directives.component';
import {DirectivesModule} from "./main-content/directives/directives.module";
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    MainContentComponent,
    GettingStartedComponent,
    StyleComponent,
    ComponentsComponent,
    DirectivesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTabsModule,
    BrowserAnimationsModule,
    StyleModule,
    GettingStartedModule,
    ComponentsModule,
    PrismModule,
    DirectivesModule,
    NgbModule.forRoot(),
    routing
],
  providers: [ HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
