import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZingComponent } from './zing.component';

describe('ZingChartsComponent', () => {
  let component: ZingComponent;
  let fixture: ComponentFixture<ZingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
