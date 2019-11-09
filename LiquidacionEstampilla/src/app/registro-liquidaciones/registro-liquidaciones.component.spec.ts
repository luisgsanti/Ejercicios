import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroLiquidacionesComponent } from './registro-liquidaciones.component';

describe('RegistroLiquidacionesComponent', () => {
  let component: RegistroLiquidacionesComponent;
  let fixture: ComponentFixture<RegistroLiquidacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroLiquidacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroLiquidacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
