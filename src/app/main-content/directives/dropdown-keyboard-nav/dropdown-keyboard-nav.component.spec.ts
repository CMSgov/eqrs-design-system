import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownKeyboardNavComponent } from './dropdown-keyboard-nav.component';

describe('DropdownKeyboardNavComponent', () => {
  let component: DropdownKeyboardNavComponent;
  let fixture: ComponentFixture<DropdownKeyboardNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownKeyboardNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownKeyboardNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
