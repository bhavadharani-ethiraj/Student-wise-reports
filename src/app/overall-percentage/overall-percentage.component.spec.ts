import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallPercentageComponent } from './overall-percentage.component';

describe('OverallPercentageComponent', () => {
  let component: OverallPercentageComponent;
  let fixture: ComponentFixture<OverallPercentageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverallPercentageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallPercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
