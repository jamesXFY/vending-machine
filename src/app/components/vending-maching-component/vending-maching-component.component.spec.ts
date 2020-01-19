import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendingMachingComponentComponent } from './vending-maching-component.component';
import { Can } from '../can-component/can';
import { CanComponentComponent } from '../can-component/can-component.component';
import { ControlPanelComponentComponent } from '../control-panel-component/control-panel-component.component';
import { CashComponentComponent } from '../cash-component/cash-component.component';
import { CreditComponentComponent } from '../credit-component/credit-component.component';
import { Subject } from 'rxjs';

fdescribe('VendingMachingComponentComponent', () => {
  let component: VendingMachingComponentComponent;
  let fixture: ComponentFixture<VendingMachingComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CanComponentComponent,
        ControlPanelComponentComponent,
        CashComponentComponent,
        CreditComponentComponent,
        VendingMachingComponentComponent
      ]
    });

    fixture = TestBed.createComponent(VendingMachingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be defined', () => {
    expect(component).toBeTruthy();
  });

  it('correct can should be selected', () => {
    const can: Can = {
      type: 'test4',
      name: 'test4',
      price: 12.33,
      amount: 10,
      icon: 'icon (5).svg'
    };
    component.onChoose(can);
    expect(component.selectedCan).toEqual(
      jasmine.objectContaining(Object.assign({}, can))
    );
  });

  it('should emit success payment', () => {
    const paymentSpy = spyOn(component.$successfulPayment, 'next');
    const can: Can = {
      type: 'test4',
      name: 'test4',
      price: 12.33,
      amount: 10,
      icon: 'icon (5).svg'
    };
    component.selectedCan = can;
    component.ejectCan();
    expect(paymentSpy).toHaveBeenCalledWith(can);
  });
});
