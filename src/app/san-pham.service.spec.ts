import { TestBed, inject } from '@angular/core/testing';

import { SanPhamService } from './san-pham.service';

describe('SanPhamService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SanPhamService]
    });
  });

  it('should be created', inject([SanPhamService], (service: SanPhamService) => {
    expect(service).toBeTruthy();
  }));
});
