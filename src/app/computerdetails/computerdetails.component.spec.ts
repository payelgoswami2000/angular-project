import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerdetailsComponent } from './computerdetails.component';

describe('ComputerdetailsComponent', () => {
  let component: ComputerdetailsComponent;
  let fixture: ComponentFixture<ComputerdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputerdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
