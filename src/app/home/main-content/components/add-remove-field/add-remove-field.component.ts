import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-remove-field',
  templateUrl: './add-remove-field.component.html',
  styleUrls: ['./add-remove-field.component.scss']
})
export class AddRemoveFieldComponent implements OnInit {

  addRemoveLineHtmlShow: boolean = false;
  addRemoveLineTsShow: boolean = false;

  addRemoveLineHtmlContent: any;
  addRemoveLineTsContent: any;
  choices: any[];
  cssLanguage = 'css';



  constructor() { }

  addNewChoice() {
    let newItemNo = this.choices.length+1;
    this.choices.push({'id':'choice'+newItemNo});
  };


  ngOnInit(): void {

    this.choices = [{id: 'choice1'}];

  this.addRemoveLineTsContent = '\n' +
    'addNewField() {\n' +
    '      let newFieldNo = this.fields.length+1;\n' +
    '      this.fields.push({\'id\':\'field\'+newFieldNo});\n' +
    '    };\n' +
    '\n' +
    'ngOnInit() {\n' +
    '  this.fields = [{id: \'field1\'}];\n' +
    '};\n';


  this.addRemoveLineHtmlContent = '\n' +
    '<fieldset *ngFor="let field of fields; let i=index;">\n' +
    '\n' +
    '    <div class="col-md-12 col-lg-2 pl-0">\n' +
    '      <div class="eqrs-label eqrs-input-wrapper  row">\n' +
    '        <label class="col-xs-12 col-lg-12 pl-0"> Measure </label>\n' +
    '        <select class="eqrs-select col-md-11" name="options" id="measure">\n' +
    '          <option value="value1">---</option>\n' +
    '          <option value="value1">ICH-CAHPS</option>\n' +
    '          <option value="value2">Clinical depression</option>\n' +
    '          <option value="value3">All measures</option>\n' +
    '        </select>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="col-md-12 col-lg-2 pl-0">\n' +
    '      <div class="eqrs-label eqrs-input-wrapper  row">\n' +
    '        <label class="col-xs-12 col-lg-12 pl-0">Filter type</label>\n' +
    '        <select class="eqrs-select col-md-11" name="options" id="filtertype">\n' +
    '          <option value="value1">---</option>\n' +
    '          <option value="include">Include</option>\n' +
    '          <option value="exclude">Exclude</option>\n' +
    '        </select>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="col-md-12 col-lg-2">\n' +
    '      <div class="eqrs-input-wrapper">\n' +
    '\n' +
    '        <button *ngIf="i == 0" class="btn btn-add" type="button" (click)="addNewField()">\n' +
    '          <i class="fa fa-plus-square fa-2x" aria-hidden="true"></i>\n' +
    '        </button>\n' +
    '        <button *ngIf="i != 0" class="btn btn-add" type="button" (click)="fields.splice(i,1)">\n' +
    '          <i class="fa fa-minus-square fa-2x" aria-hidden="true"></i>\n' +
    '        </button>\n' +
    '\n' +
    '      </div>\n' +
    '\n' +
    '  </div> \n' +
    '</fieldset>\n';
  }


}
