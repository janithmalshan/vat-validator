import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VatNumberComponent } from './vat-number.component';

describe('VatNumberComponent', () => {
  let component: VatNumberComponent;
  let fixture: ComponentFixture<VatNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VatNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VatNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
