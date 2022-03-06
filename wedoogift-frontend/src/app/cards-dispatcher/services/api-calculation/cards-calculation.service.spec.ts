import { TestBed } from '@angular/core/testing';

import { CardsCalculationService } from './cards-calculation.service';

describe('CardsCalculationService', () => {
  let service: CardsCalculationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardsCalculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
