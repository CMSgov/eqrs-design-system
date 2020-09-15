import { NgModule } from '@angular/core';
import { HomepageComponent } from './home/homepage/homepage.component';
import { RouterModule, Routes} from '@angular/router';


const appRoutes: Routes = [
  {
    path: 'home', component: HomepageComponent
  },
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
