import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRemoveFieldComponent } from './add-remove-field.component';

describe('AddRemoveFieldComponent', () => {
  let component: AddRemoveFieldComponent;
  let fixture: ComponentFixture<AddRemoveFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRemoveFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRemoveFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
