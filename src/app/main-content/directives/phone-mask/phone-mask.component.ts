import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone-mask',
  templateUrl: './phone-mask.component.html',
  styleUrls: ['./phone-mask.component.css']
})
export class PhoneMaskComponent implements OnInit {
  htmlLanguage = 'html';
  phoneMaskContent: any;
  phoneMaskModule: any;
  constructor() { }

  ngOnInit() {
    this.phoneMaskContent ='<input id="input-date2" formControlName="inputControl" phone>\n';
    this.phoneMaskModule =  `@NgModule({
             imports: [
                PhoneMaskModule
             ],
             declarations: [AppComponent],
             bootstrap: [AppComponent]
       })
       export class AppModule { }`;
  }

}
