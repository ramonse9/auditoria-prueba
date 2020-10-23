import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavTiendasComponent } from './nav-tiendas.component';

describe('NavTiendasComponent', () => {
  let component: NavTiendasComponent;
  let fixture: ComponentFixture<NavTiendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavTiendasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavTiendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
