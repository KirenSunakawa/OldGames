import { TestBed, inject } from '@angular/core/testing';

import { SnakeScoreService } from './snake-score.service';

describe('SnakeScoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SnakeScoreService]
    });
  });

  it('should be created', inject([SnakeScoreService], (service: SnakeScoreService) => {
    expect(service).toBeTruthy();
  }));
});
