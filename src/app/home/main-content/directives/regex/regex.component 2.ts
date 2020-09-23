import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regex',
  templateUrl: './regex.component.html',
  styleUrls: ['./regex.component.css']
})
export class RegexComponent implements OnInit {

  regexContent: any;
  cssLanguage = 'css';
  constructor() { }

  ngOnInit() {
    this.regexContent = '<input regex="[1-9][0-9]" name="input_field" [(ngModel)]="field">';
  }

}
