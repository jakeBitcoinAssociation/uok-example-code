import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateKeyWifComponent } from './private-key-wif.component';

describe('PrivateKeyWifComponent', () => {
  let component: PrivateKeyWifComponent;
  let fixture: ComponentFixture<PrivateKeyWifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateKeyWifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateKeyWifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
