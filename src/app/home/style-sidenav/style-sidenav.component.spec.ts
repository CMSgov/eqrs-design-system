import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleSidenavComponent } from './style-sidenav.component';

describe('StyleSidenavComponent', () => {
  let component: SideNavComponent;
  let fixture: ComponentFixture<StyleSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
