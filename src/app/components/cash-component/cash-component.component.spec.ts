import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashComponentComponent } from './cash-component.component';
import { By } from '@angular/platform-browser';

describe('CashComponentComponent', () => {
  let component: CashComponentComponent;
  let fixture: ComponentFixture<CashComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ CashComponentComponent ]
    });
    fixture = TestBed.createComponent(CashComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });

  it('cash should be emiited', () => {
    const cashEmitter = spyOn(component.paymentProceeded , 'emit');
    component.onClick('12.55');
    expect(cashEmitter).toHaveBeenCalledWith(12.55);
  });

  it('payment should be activated', () => {
    const priceOption = fixture.debugElement.queryAll(By.css('.priceOption'))[1].nativeElement;
    component.disabled = false;
    component.active();
    expect(priceOption.classList).not.toContain('disabled');

    component.disabled = true;
    component.active();
    expect(priceOption.classList).toContain('disabled');

  });
});
