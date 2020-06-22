import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { EqrsButtonTypes } from './eqrs-button-types.enum';

@Component({
  selector: 'app-eqrs-buttons',
  templateUrl: './eqrs-buttons.component.html',
  styleUrls: ['./eqrs-buttons.component.scss']
})
export class EqrsButtonsComponent implements OnInit {

  @Output() 
  click: EventEmitter<any> = new EventEmitter();

  @Input() 
  type: string = 'button';

  @Input() 
  eqrsType: EqrsButtonTypes = EqrsButtonTypes.Primary;

  @Input() 
  id: string = 'eqrsButtonId';

  @Input() 
  name: string = 'eqrsButtonName';

  @Input() 
  disabled: boolean = false;

    public EqrsButtonTypes = EqrsButtonTypes;

  constructor() {}

    public onClick(): void {
        if (this.click.observers.length > 0) {
            this.click.emit();
        }
    }

    public typeEqualTo(checkType: EqrsButtonTypes): boolean {
        return this.eqrsType === checkType;
    }
  

  ngOnInit() {
  }

  
 

}
