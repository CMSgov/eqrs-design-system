import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-style-sidenav',
  templateUrl: './style-sidenav.component.html'
})
export class StyleSidenavComponent implements OnInit {

  menuItems: any;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get('assets/data/sidenav-style.json').subscribe(
      data => {
        this.menuItems = data as string [];
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

}
