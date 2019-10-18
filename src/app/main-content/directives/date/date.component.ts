import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  cssLanguage = 'css';
  dateShow: boolean = false;
  dateContent: any;

  constructor() { }

  ngOnInit() {
    this.dateContent =
      '\n<input-date formControlName="dateControl" [required]="true" \n' +
          '\t [minValue]="\'1973-01-01\'" [maxValue]="\'2010-01-01\'" \n' +
          '\t [setErrorStyle]="form.controls[\'dateControl\'].touched && form.controls[\'dateControl\'].invalid"> \n' +
      '</input-date>';
  }

}
