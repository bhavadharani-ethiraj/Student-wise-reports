import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisspelledWordTableComponent } from './misspelled-word-table.component';

describe('MisspelledWordTableComponent', () => {
  let component: MisspelledWordTableComponent;
  let fixture: ComponentFixture<MisspelledWordTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisspelledWordTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisspelledWordTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
