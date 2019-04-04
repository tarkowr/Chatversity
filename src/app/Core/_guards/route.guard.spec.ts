import { TestBed, async, inject } from '@angular/core/testing';
import { RouteGuard } from './route.guard';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteGuard]
    });
  });

  it('should ...', inject([RouteGuard], (guard: RouteGuard) => {
    expect(guard).toBeTruthy();
  }));
});