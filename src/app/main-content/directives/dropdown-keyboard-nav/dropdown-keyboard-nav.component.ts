import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-keyboard-nav',
  templateUrl: './dropdown-keyboard-nav.component.html',
  styleUrls: ['./dropdown-keyboard-nav.component.css']
})
export class DropdownKeyboardNavComponent implements OnInit {
  cssLanguage = 'css';
  navModule: any;
  navContent: any;
  constructor() { }

  ngOnInit() {
    this.navModule = `@NgModule({
        imports: [
        DropdownKeyboardNavModule
        ],
        declarations: [AppComponent],
        bootstrap: [AppComponent]
      })
      export class AppModule { }`;
    this.navContent = '<li ngbDropdown dropdownKeyboardNav class="nav-item dropdown" role="menubar" ></li>';
  }

}
