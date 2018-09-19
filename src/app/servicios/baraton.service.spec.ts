import { TestBed, inject } from '@angular/core/testing';

import { BaratonService } from './baraton.service';

describe('HotelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaratonService]
    });
  });

  it('should be created', inject([BaratonService], (service: BaratonService) => {
    expect(service).toBeTruthy();
  }));
});
