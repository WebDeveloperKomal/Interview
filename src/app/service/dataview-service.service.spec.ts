import { TestBed } from '@angular/core/testing';

import { DataviewServiceService } from './dataview-service.service';

describe('DataviewServiceService', () => {
  let service: DataviewServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataviewServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
