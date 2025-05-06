import { TestBed } from '@angular/core/testing';

import { AppValidatorsService } from './app-validators.service';

describe('AppValidatorsService', () => {
  let service: AppValidatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppValidatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
