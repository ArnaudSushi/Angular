import { TestBed } from '@angular/core/testing';

import { TypeusersService } from './typeusers.service';

describe('TypeusersService', () => {
  let service: TypeusersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeusersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
