import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberFormatsComponent } from './number-formats.component';

describe('NumberFormatsComponent', () => {
  let component: NumberFormatsComponent;
  let fixture: ComponentFixture<NumberFormatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberFormatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberFormatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
