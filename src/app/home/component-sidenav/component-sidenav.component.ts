import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-component-sidenav',
  templateUrl: './component-sidenav.component.html',
  styleUrls: ['./component-sidenav.component.scss']
})
export class ComponentSidenavComponent implements OnInit {

  menuItems: any;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get('assets/data/menu-items.json').subscribe(
      data => {
        this.menuItems = data as string [];
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

}
