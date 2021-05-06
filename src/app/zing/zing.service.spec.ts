import { TestBed } from '@angular/core/testing';

import { ZingService } from './zing.service';

describe('ZingChartsService', () => {
  let service: ZingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
