import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointsAndEllipticCurvesComponent } from './points-and-elliptic-curves.component';

describe('PointsAndEllipticCurvesComponent', () => {
  let component: PointsAndEllipticCurvesComponent;
  let fixture: ComponentFixture<PointsAndEllipticCurvesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointsAndEllipticCurvesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointsAndEllipticCurvesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
