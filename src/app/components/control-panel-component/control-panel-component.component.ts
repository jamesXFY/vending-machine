import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ElementRef,
  ViewChildren,
  QueryList
} from '@angular/core';
import { Can } from '../can-component/can';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-control-panel-component',
  templateUrl: './control-panel-component.component.html',
  styleUrls: ['./control-panel-component.component.scss']
})
export class ControlPanelComponentComponent implements OnInit, OnChanges {
  public cashChange = 0;
  public receivedCash = 0;

  public cashInTotal = 0;
  public creditInTotal = 0;
  public soldedCansTotal = 0;

  public paymentMethodActive = false;

  public chosedPayment = '';

  @Input() can: Can;
  @Input() $restoreCansSubject: Subject<string>;

  @Output() paymentDone: EventEmitter<Can> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('can') && !changes.can.isFirstChange()) {
      this.cashChange = 0;
      this.paymentMethodActive = this.can.amount > 0;
      console.log(this.paymentMethodActive);
    }
  }

  onCashSubmit(event: number) {
    const cashAmount = event;
    this.receivedCash = this.receivedCash + cashAmount;

    if (this.receivedCash >= this.can.price) {
      this.soldedCansTotal = this.soldedCansTotal + 1;
      this.cashInTotal = this.cashInTotal + this.can.price;

      this.cashChange = this.receivedCash - this.can.price;
      this.paymentMethodActive = false;
      this.receivedCash = 0;

      this.paymentDone.emit(this.can);
    }
  }

  onCreditSubmit() {
    this.soldedCansTotal = this.soldedCansTotal + 1;
    this.creditInTotal = this.creditInTotal + this.can.price;
    this.paymentMethodActive = false;
    
    this.paymentDone.emit();
  }

  chosePaymentMethod($event) {
    console.log($event.target.value);
    this.chosedPayment = $event.target.value;
  }

  getPaymentMethod() {
    if (this.chosedPayment === 'creditPayment') {
      return this.chosedPayment;
    }
    return 'cashPayment';
  }

  restoreCans() {
    this.initProps();
    this.$restoreCansSubject.next('restore');
  }

  finishRestore() {
    this.$restoreCansSubject.next('finish');
  }

  initProps() {
    this.cashChange = 0;
    this.receivedCash = 0;
    this.cashInTotal = 0;
    this.creditInTotal = 0;
    this.soldedCansTotal = 0;
    this.paymentMethodActive = false;
    this.chosedPayment = '';
  }
}
