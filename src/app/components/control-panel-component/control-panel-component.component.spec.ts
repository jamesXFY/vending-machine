import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPanelComponentComponent } from './control-panel-component.component';
import { Can } from '../can-component/can';
import { CashComponentComponent } from '../cash-component/cash-component.component';
import { CreditComponentComponent } from '../credit-component/credit-component.component';

describe('ControlPanelComponentComponent', () => {
  let component: ControlPanelComponentComponent;
  let fixture: ComponentFixture<ControlPanelComponentComponent>;
  let can: Can;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlPanelComponentComponent, CashComponentComponent, CreditComponentComponent]
    });

    can = {
      type: 'test',
      name: 'test',
      price: 12.33,
      amount: 20,
      icon: 'icon (1).svg'
    };

    fixture = TestBed.createComponent(ControlPanelComponentComponent);
    component = fixture.componentInstance;
    component.can = can;
    fixture.detectChanges();
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });

  it('received cash should be displayed', () => {
    const receivedCashSpy = spyOn(component.paymentDone, 'emit');
    component.onCashSubmit(5);
    expect(component.receivedCash).toEqual(5);
    expect(receivedCashSpy).not.toHaveBeenCalled();

    component.onCashSubmit(5);
    expect(component.receivedCash).toEqual(10);
    expect(receivedCashSpy).not.toHaveBeenCalled();

    component.onCashSubmit(20);
    expect(component.receivedCash).toEqual(0);
    expect(component.soldedCansTotal).toEqual(1);
    expect(component.cashInTotal).toEqual(12.33);
    expect(component.cashChange).toEqual(17.67);
    expect(component.paymentMethodActive).toEqual(false);
    expect(receivedCashSpy).toHaveBeenCalledWith(component.can);

  });

  it('credit pay should be displayed', () => {
    const receivedCashSpy = spyOn(component.paymentDone, 'emit');
    component.onCreditSubmit();

    expect(component.soldedCansTotal).toEqual(1);
    expect(component.creditInTotal).toEqual(12.33);
    expect(component.paymentMethodActive).toEqual(false);
    expect(receivedCashSpy).toHaveBeenCalled();

  });

  it('get payment method should be correct', () => {
    component.chosedPayment = 'creditPayment';
    let paymentMethod = component.getPaymentMethod();

    expect(paymentMethod).toEqual('creditPayment');

    component.chosedPayment = 'cashPayment';
    paymentMethod = component.getPaymentMethod();
    expect(paymentMethod).toEqual('cashPayment');

  });
});
