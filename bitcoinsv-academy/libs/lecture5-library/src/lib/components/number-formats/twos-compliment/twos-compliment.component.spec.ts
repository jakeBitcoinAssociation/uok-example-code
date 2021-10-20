import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwosComplimentComponent } from './twos-compliment.component';

describe('TwosComplimentComponent', () => {
  let component: TwosComplimentComponent;
  let fixture: ComponentFixture<TwosComplimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwosComplimentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwosComplimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
