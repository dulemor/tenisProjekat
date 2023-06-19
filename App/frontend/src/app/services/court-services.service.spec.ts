import { TestBed } from '@angular/core/testing';

import { CourtServicesService } from './court-services.service';

describe('CourtServicesService', () => {
  let service: CourtServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourtServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
