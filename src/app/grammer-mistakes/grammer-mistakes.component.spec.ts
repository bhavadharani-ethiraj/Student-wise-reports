import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrammerMistakesComponent } from './grammer-mistakes.component';

describe('GrammerMistakesComponent', () => {
  let component: GrammerMistakesComponent;
  let fixture: ComponentFixture<GrammerMistakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrammerMistakesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrammerMistakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
