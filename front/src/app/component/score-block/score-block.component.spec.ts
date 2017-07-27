import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreBlockComponent } from './score-block.component';

describe('ScoreBlockComponent', () => {
  let component: ScoreBlockComponent;
  let fixture: ComponentFixture<ScoreBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
