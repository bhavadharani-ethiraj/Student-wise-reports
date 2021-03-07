import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningGapComponent } from './learning-gap.component';

describe('LearningGapComponent', () => {
  let component: LearningGapComponent;
  let fixture: ComponentFixture<LearningGapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningGapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningGapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
