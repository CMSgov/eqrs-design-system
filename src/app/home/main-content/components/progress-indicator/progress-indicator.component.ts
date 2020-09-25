import { Component, OnInit } from '@angular/core';

import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';



@Component({
  selector: 'app-progress-indicator',
  templateUrl: './progress-indicator.component.html',
  styleUrls: ['./progress-indicator.component.scss']
})
export class ProgressIndicatorComponent implements OnInit {

  cssLanguage = 'css';
  value: number;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  progressIndicatorContent: any;
  progressIndicatorShow: boolean;

  constructor() { }

  ngOnInit(): void {
    this.progressIndicatorContent =
    ` <mat-progress-spinner
          class="example-margin"
          [color]="color"
          [mode]="mode"
          [value]="value">
     </mat-progress-spinner> `

  }

}
