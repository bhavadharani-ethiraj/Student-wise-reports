import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisTabulationComponent } from './analysis-tabulation.component';

describe('AnalysisTabulationComponent', () => {
  let component: AnalysisTabulationComponent;
  let fixture: ComponentFixture<AnalysisTabulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalysisTabulationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisTabulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
