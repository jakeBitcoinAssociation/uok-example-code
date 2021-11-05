import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleAppLayoutComponent } from './example-app-layout.component';

describe('ExampleAppLayoutComponent', () => {
  let component: ExampleAppLayoutComponent;
  let fixture: ComponentFixture<ExampleAppLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleAppLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleAppLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
