import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinedGraphBarAreaComponent } from './combined-graph-bar-area.component';

describe('CombinedGraphBarAreaComponent', () => {
  let component: CombinedGraphBarAreaComponent;
  let fixture: ComponentFixture<CombinedGraphBarAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombinedGraphBarAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CombinedGraphBarAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
