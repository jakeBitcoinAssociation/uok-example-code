import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture5LayoutComponent } from './lecture5-layout.component';

describe('Lecture5LayoutComponent', () => {
  let component: Lecture5LayoutComponent;
  let fixture: ComponentFixture<Lecture5LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lecture5LayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture5LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
