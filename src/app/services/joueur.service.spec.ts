import { TestBed } from '@angular/core/testing';

import { JoueurService } from './joueur.service';  // Updated the service import

describe('JoueurService', () => {
  let service: JoueurService;  // Updated the service variable and type

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JoueurService);  // Updated the service variable assignment
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
