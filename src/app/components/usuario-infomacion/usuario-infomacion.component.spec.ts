import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioInfomacionComponent } from './usuario-infomacion.component';

describe('UsuarioInfomacionComponent', () => {
  let component: UsuarioInfomacionComponent;
  let fixture: ComponentFixture<UsuarioInfomacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioInfomacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioInfomacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
