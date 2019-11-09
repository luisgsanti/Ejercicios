import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaLiquidacionesComponent } from './consulta-liquidaciones.component';

describe('ConsultaLiquidacionesComponent', () => {
  let component: ConsultaLiquidacionesComponent;
  let fixture: ComponentFixture<ConsultaLiquidacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaLiquidacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaLiquidacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
