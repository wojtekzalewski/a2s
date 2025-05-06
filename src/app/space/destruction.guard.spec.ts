import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { destructionGuard } from './destruction.guard';

describe('destructionGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => destructionGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
