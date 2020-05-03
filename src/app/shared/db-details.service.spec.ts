import { TestBed, inject } from '@angular/core/testing';

import { DbDetailsService } from './db-details.service';

describe('DbDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DbDetailsService]
    });
  });

  it('should be created', inject([DbDetailsService], (service: DbDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
