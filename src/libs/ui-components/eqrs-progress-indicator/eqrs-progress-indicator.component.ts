import { Component, OnInit, Input } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-eqrs-progress-indicator',
  templateUrl: './eqrs-progress-indicator.component.html',
  styleUrls: ['./eqrs-progress-indicator.component.scss']
})
export class EqrsProgressIndicatorComponent implements OnInit {

  @Input()
    diameter: number
  
  @Input()
    color: ThemePalette
  
  @Input()
    mode: ProgressSpinnerMode

  @Input()
    value: number
  
  @Input()
    strokeWidth: number

  
  constructor() { }

  ngOnInit() {
  }

}
