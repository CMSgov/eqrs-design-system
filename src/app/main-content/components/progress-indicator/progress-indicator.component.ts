import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-indicator',
  templateUrl: './progress-indicator.component.html',
  styleUrls: ['./progress-indicator.component.css']
})
export class ProgressIndicatorComponent implements OnInit {

  progressContent: any;
  htmlLanguage = 'html';

  constructor() { }

  ngOnInit() {
    this.progressContent =
      '\t<progress-circle [numerator]=7 [denominator]="9" [diameter]="100"></progress-circle>\n' +
      '\t\t<progress-circle [numerator]=4 [denominator]="31" [diameter]="70"></progress-circle>';
  }

}
