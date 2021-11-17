import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsonchainApi } from './whatsonchain-api';

describe('WhatsonchainApi.ComponentComponent', () => {
  let component: WhatsonchainApi.ComponentComponent;
  let fixture: ComponentFixture<WhatsonchainApi.ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatsonchainApi.ComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatsonchainApi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
