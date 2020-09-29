import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CameradetailsComponent } from './cameradetails.component';

describe('CameradetailsComponent', () => {
  let component: CameradetailsComponent;
  let fixture: ComponentFixture<CameradetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CameradetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CameradetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
