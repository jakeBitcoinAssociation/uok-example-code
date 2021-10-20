import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignMagnitudeComponent } from './sign-magnitude.component';

describe('SignMagnitudeComponent', () => {
  let component: SignMagnitudeComponent;
  let fixture: ComponentFixture<SignMagnitudeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignMagnitudeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignMagnitudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
