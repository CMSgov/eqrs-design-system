/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FocusOnLoadComponent } from './focus-on-load.component';

describe('FocusOnLoadComponent', () => {
  let component: FocusOnLoadComponent;
  let fixture: ComponentFixture<FocusOnLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FocusOnLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FocusOnLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
