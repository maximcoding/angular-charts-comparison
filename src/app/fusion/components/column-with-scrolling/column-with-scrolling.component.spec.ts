import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnWithScrollingComponent } from './column-with-scrolling.component';

describe('ColumnWithScrollingComponent', () => {
  let component: ColumnWithScrollingComponent;
  let fixture: ComponentFixture<ColumnWithScrollingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnWithScrollingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnWithScrollingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
