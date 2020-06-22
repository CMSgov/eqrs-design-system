import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EQRS-DesignSystem-UI';
  router:any;

  constructor(private _router:Router){
    this.router = _router
  }
}
