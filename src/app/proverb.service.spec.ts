import { TestBed } from '@angular/core/testing';

import { ProverbService } from './proverb.service';

describe('ProverbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProverbService = TestBed.get(ProverbService);
    expect(service).toBeTruthy();
  });
});
