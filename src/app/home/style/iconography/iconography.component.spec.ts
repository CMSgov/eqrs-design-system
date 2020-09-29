/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IconographyComponent } from './iconography.component';

describe('IconographyComponent', () => {
  let component: IconographyComponent;
  let fixture: ComponentFixture<IconographyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconographyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
