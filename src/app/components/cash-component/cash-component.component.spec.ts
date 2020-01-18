import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashComponentComponent } from './cash-component.component';

describe('CashComponentComponent', () => {
  let component: CashComponentComponent;
  let fixture: ComponentFixture<CashComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
