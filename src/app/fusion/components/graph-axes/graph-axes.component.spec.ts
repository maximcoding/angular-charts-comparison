import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphAxesComponent } from './graph-axes.component';

describe('GraphAxesComponent', () => {
  let component: GraphAxesComponent;
  let fixture: ComponentFixture<GraphAxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphAxesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphAxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
