import { TestBed } from '@angular/core/testing';

import { ServicesinterestService } from './servicesinterest.service';

describe('ServicesinterestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicesinterestService = TestBed.get(ServicesinterestService);
    expect(service).toBeTruthy();
  });
});
