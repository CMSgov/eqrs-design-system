/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StyleComponent } from './style.component';

describe('StyleComponent', () => {
  let component: StyleComponent;
  let fixture: ComponentFixture<StyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
