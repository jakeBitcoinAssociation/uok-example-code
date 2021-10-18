import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture5LibraryComponent } from './big-numbers.component';

describe('Lecture5LibraryComponent', () => {
  let component: Lecture5LibraryComponent;
  let fixture: ComponentFixture<Lecture5LibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lecture5LibraryComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture5LibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
