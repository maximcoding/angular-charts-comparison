import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxbarComponent } from './ngxbar.component';

describe('NgxbarComponent', () => {
  let component: NgxbarComponent;
  let fixture: ComponentFixture<NgxbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
