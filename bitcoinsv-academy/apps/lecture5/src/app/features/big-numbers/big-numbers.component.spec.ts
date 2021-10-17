import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigNumbersComponent } from './big-numbers.component';

describe('BigNumbersComponent', () => {
  let component: BigNumbersComponent;
  let fixture: ComponentFixture<BigNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigNumbersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
