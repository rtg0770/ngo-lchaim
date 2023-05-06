import { TestBed } from '@angular/core/testing';

import { DonationsPageService } from './donations-page.service';

describe('DonationsPageService', () => {
  let service: DonationsPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonationsPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
