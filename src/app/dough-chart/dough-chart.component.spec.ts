import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoughChartComponent } from './dough-chart.component';

describe('DoughChartComponent', () => {
  let component: DoughChartComponent;
  let fixture: ComponentFixture<DoughChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoughChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoughChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
