import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HashFunctionsComponent } from './hash-functions.component';

describe('HashFunctionsComponent', () => {
  let component: HashFunctionsComponent;
  let fixture: ComponentFixture<HashFunctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HashFunctionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HashFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
