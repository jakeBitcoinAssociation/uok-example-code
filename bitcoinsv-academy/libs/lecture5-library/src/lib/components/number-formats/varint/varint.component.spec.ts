import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarintComponent } from './varint.component';

describe('VarintComponent', () => {
  let component: VarintComponent;
  let fixture: ComponentFixture<VarintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VarintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VarintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
