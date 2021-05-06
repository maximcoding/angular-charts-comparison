import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxdoughnutComponent } from './ngxdoughnut.component';

describe('NgxdoughnutComponent', () => {
  let component: NgxdoughnutComponent;
  let fixture: ComponentFixture<NgxdoughnutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxdoughnutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxdoughnutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
