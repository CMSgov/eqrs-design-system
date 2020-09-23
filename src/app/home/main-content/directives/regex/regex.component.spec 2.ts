/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RegexComponent } from './regex.component';

describe('RegexComponent', () => {
  let component: RegexComponent;
  let fixture: ComponentFixture<RegexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
