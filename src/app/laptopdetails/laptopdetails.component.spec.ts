import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopdetailsComponent } from './laptopdetails.component';

describe('LaptopdetailsComponent', () => {
  let component: LaptopdetailsComponent;
  let fixture: ComponentFixture<LaptopdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaptopdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
