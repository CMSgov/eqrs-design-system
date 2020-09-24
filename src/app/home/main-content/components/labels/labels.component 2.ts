import { Component, OnInit } from '@angular/core';

export enum EqrsLabelTypes{
  success = 'success',
  warning = 'warning'
}

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.scss']
})
export class LabelsComponent implements OnInit {

  cssLanguage = 'css';
  labelsContent: any;

  eqrsLabelTypes = EqrsLabelTypes

  constructor() { }

  ngOnInit(): void {
    this.labelsContent =
      '<eqrs-labels [eqrsTypes]="eqrsLabelTypes.success">Edited</eqrs-labels>\n' +
      '<eqrs-labels [eqrsTypes]="eqrsLabelTypes.warning">Warning</eqrs-labels>';
  }

}
