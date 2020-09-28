import { NgModule } from '@angular/core';
import { HomepageComponent } from './home/homepage/homepage.component';
import { PrinciplesComponent } from './home/main-content/getting-started/principles/principles.component';
import { GettingStartedComponent } from './home/main-content/getting-started/getting-started.component';
import { StyleComponent } from './home/style/style.component';
import { ComponentsComponent } from './home/components/components.component';
import { GovernanceComponent } from './home/main-content/governance/governance.component';
import { AboutComponent } from './home/main-content/about/about.component';
import { RouterModule, Routes} from '@angular/router';


const appRoutes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'start', component: GettingStartedComponent },
  { path: 'principles', component: PrinciplesComponent },
  { path: 'style-guide', component: StyleComponent },
  { path: 'components', component: ComponentsComponent },
  { path: 'governance', component: GovernanceComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'eqrs-design-system',
    loadChildren: () => import('./home/main.module').then(m => m.MainModule)
  },
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path: '**', component: HomepageComponent
  },
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
