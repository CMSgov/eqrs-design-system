import { Component, OnInit, Input } from '@angular/core';

export enum EqrsLabelTypes{
  success = 'success',
  warning = 'warning'
}

@Component({
  selector: 'eqrs-labels',
  templateUrl: './eqrs-labels.component.html',
  styleUrls: ['./eqrs-labels.component.scss']
})
export class EqrsLabelsComponent implements OnInit {

 @Input()
 eqrsTypes: EqrsLabelTypes

public EqrsLabelTypes = EqrsLabelTypes;

 public typeEqualTo(checkType: EqrsLabelTypes): boolean {
    return this.eqrsTypes === checkType;
 }

  constructor() { }

  ngOnInit() {
  }

}
