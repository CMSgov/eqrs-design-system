import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeric',
  templateUrl: './numeric.component.html',
  styleUrls: ['./numeric.component.css']
})
export class NumericComponent implements OnInit {
  cssLanguage = 'css';
  numericContent: any;
  numericModule: any;

  constructor() { }

  ngOnInit() {
    this.numericModule =
      `@NgModule({
              imports: [
               NumericDirectiveModule
              ],
              declarations: [AppComponent],
              bootstrap: [AppComponent] 
            })
            export class AppModule { }`;

    this.numericContent = '<input numeric name="xyz" >';
  }

}
