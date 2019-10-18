import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  isMenuOpen: boolean=false;
  isMenu1Open: boolean=false;
  isMenu2Open: boolean=false;
  isMenu3Open: boolean=false;
  menuItems: any;

  constructor( private http: HttpClient ) { }

  ngOnInit() {
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
