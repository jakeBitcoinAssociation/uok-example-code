import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigLittleEndianComponent } from './big-little-endian.component';

describe('BigLittleEndianComponent', () => {
  let component: BigLittleEndianComponent;
  let fixture: ComponentFixture<BigLittleEndianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigLittleEndianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigLittleEndianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
