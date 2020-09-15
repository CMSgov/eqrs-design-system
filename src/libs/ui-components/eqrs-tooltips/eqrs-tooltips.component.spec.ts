/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EqrsTooltipsComponent } from './eqrs-tooltips.component';

describe('EqrsTooltipsComponent', () => {
  let component: EqrsTooltipsComponent;
  let fixture: ComponentFixture<EqrsTooltipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EqrsTooltipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EqrsTooltipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
