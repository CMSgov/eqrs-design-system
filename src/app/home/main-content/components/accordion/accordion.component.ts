import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  @Input() panelExpanded: boolean = true;
  @Input() formGroup: FormGroup;
  accordionContent: any;
  accordionShow: boolean = false;
  cssLanguage = 'css';

  constructor() { }

  ngOnInit() {
    this.accordionContent= 
    '<mat-expansion-panel>\n' +
    ' <mat-expansion-panel-header>\n' +
    '  <mat-panel-title>SAMPLE ACCORDION</mat-panel-title>\n' +
    '  <mat-panel-description></mat-panel-description>\n' +
    ' </mat-expansion-panel-header>\n' +

    ' <div><p>This is the panel content. Add panel details</p></div>\n' +
    ' <mat-action-row><button>Sample</button></mat-action-row>\n' +
    '</mat-expansion-panel>';

    
  }

  showCode(){
    this.accordionShow = !this.accordionShow;
    console.log(this.accordionShow)
  }
  
}
