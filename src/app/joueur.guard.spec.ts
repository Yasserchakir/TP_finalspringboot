import { TestBed } from '@angular/core/testing';
import { JoueurGuard } from './joueur.guard'; // Updated guard import

describe('JoueurGuard', () => { // Updated guard name
  let guard: JoueurGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(JoueurGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
