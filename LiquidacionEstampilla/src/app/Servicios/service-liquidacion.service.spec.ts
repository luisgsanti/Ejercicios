import { TestBed } from '@angular/core/testing';

import { ServiceLiquidacionService } from './service-liquidacion.service';

describe('ServiceLiquidacionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceLiquidacionService = TestBed.get(ServiceLiquidacionService);
    expect(service).toBeTruthy();
  });
});
