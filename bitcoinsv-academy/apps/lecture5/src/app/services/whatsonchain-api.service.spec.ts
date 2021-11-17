import { TestBed } from '@angular/core/testing';

import { WhatsonchainApiService } from './whatsonchain-api.service';

describe('WhatsonchainApiService', () => {
  let service: WhatsonchainApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhatsonchainApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
