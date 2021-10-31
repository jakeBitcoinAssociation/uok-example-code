import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeysAddressesComponent } from './keys-addresses.component';

describe('KeysAddressesComponent', () => {
  let component: KeysAddressesComponent;
  let fixture: ComponentFixture<KeysAddressesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeysAddressesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeysAddressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
