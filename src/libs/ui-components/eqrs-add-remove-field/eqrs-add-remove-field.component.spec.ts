/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EqrsAddRemoveFieldComponent } from './eqrs-add-remove-field.component';

describe('EqrsAddRemoveFieldComponent', () => {
  let component: EqrsAddRemoveFieldComponent;
  let fixture: ComponentFixture<EqrsAddRemoveFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EqrsAddRemoveFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EqrsAddRemoveFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
