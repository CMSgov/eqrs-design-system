import { NgModule } from '@angular/core';
import { MainContentComponent } from './home/main-content/main-content.component';
import { RouterModule, Routes} from '@angular/router';


const appRoutes: Routes = [
  {
    path: 'home', component: MainContentComponent
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
    path: '**', component: MainContentComponent
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
