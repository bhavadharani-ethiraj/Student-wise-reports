import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkStatisticsComponent } from './mark-statistics.component';

describe('MarkStatisticsComponent', () => {
  let component: MarkStatisticsComponent;
  let fixture: ComponentFixture<MarkStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
