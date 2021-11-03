import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressFromStringComponent } from './address-from-string.component';

describe('AddressFromStringComponent', () => {
  let component: AddressFromStringComponent;
  let fixture: ComponentFixture<AddressFromStringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressFromStringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressFromStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
