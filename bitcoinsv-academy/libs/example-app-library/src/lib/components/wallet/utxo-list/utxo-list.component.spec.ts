import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtxoListComponent } from './utxo-list.component';

describe('UtxoListComponent', () => {
  let component: UtxoListComponent;
  let fixture: ComponentFixture<UtxoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtxoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtxoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
