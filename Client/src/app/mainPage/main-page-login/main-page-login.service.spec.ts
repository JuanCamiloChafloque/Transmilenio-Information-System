import { TestBed } from '@angular/core/testing';

import { MainPageLoginService } from './main-page-login.service';

describe('MainPageLoginService', () => {
  let service: MainPageLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainPageLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
