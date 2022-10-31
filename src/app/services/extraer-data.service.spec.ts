import { TestBed } from '@angular/core/testing';

import { ExtraerDataService } from './extraer-data.service';

describe('ExtraerDataService', () => {
  let service: ExtraerDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtraerDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
