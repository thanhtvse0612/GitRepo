import { TestBed, inject } from '@angular/core/testing';

import { ComponentEightService } from './component-eight.service';

describe('ComponentEightService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComponentEightService]
    });
  });

  it('should be created', inject([ComponentEightService], (service: ComponentEightService) => {
    expect(service).toBeTruthy();
  }));
});
