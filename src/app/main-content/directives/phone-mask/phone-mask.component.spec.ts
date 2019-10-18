import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneMaskComponent } from './phone-mask.component';

describe('PhoneMaskComponent', () => {
  let component: PhoneMaskComponent;
  let fixture: ComponentFixture<PhoneMaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneMaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
