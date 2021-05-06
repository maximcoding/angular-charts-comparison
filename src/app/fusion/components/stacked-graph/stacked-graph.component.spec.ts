import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedGraphComponent } from './stacked-graph.component';

describe('StackedGraphComponent', () => {
  let component: StackedGraphComponent;
  let fixture: ComponentFixture<StackedGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackedGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackedGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
