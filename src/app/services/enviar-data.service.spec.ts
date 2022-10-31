import { TestBed } from '@angular/core/testing';

import { EnviarDataService } from './enviar-data.service';

describe('EnviarDataService', () => {
  let service: EnviarDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnviarDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
