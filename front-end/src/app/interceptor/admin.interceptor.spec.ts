import { TestBed } from '@angular/core/testing';
import { HttpInterceptorFn } from '@angular/common/http';

import { adminInterceptor } from './admin.interceptor';

describe('adminInterceptor', () => {
  const interceptor: HttpInterceptorFn = (req, next) => 
    TestBed.runInInjectionContext(() => adminInterceptor(req, next));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});
