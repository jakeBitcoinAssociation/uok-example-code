import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture6LayoutComponent } from './lecture6-layout.component';

describe('Lecture6LayoutComponent', () => {
  let component: Lecture6LayoutComponent;
  let fixture: ComponentFixture<Lecture6LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lecture6LayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture6LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
