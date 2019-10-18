import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.scss']
})
export class LabelsComponent implements OnInit {

  cssLanguage = 'css';
  labelsContent: any;
  constructor() { }

  ngOnInit() {
    this.labelsContent =
      '<label class="eqrs-label-success">Edited</label>\n' +
      '        <label class="eqrs-label-warning">Warning</label>';
  }

}
