import { TestBed } from '@angular/core/testing';

import { UserDetailGuard } from './user-detail.guard';

describe('UserDetailGuard', () => {
  let guard: UserDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
