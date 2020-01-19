import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Can } from '../can-component/can';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-vending-maching-component',
  templateUrl: './vending-maching-component.component.html',
  styleUrls: ['./vending-maching-component.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class VendingMachingComponentComponent implements OnInit {
  public selectedCan: Can;

  public cans: Array<Can> = new Array<Can>();
  public $successfulPayment: Subject<Can> = new Subject<Can>();
  public $restoreCansSubject: Subject<string> = new Subject<string>();

  constructor() {
    const can1: Can = {
      type: 'test',
      name: 'test',
      price: 12.33,
      amount: 20,
      icon: 'icon (1).svg'
    };

    const can2: Can = {
      type: 'test1',
      name: 'test1',
      price: 12.33,
      amount: 10,
      icon: 'icon (2).svg'
    };

    const can3: Can = {
      type: 'test3',
      name: 'test3',
      price: 12.33,
      amount: 10,
      icon: 'icon (3).svg'
    };

    const can4: Can = {
      type: 'test4',
      name: 'test4',
      price: 12.33,
      amount: 10,
      icon: 'icon (4).svg'
    };

    const can5: Can = {
      type: 'test4',
      name: 'test4',
      price: 12.33,
      amount: 10,
      icon: 'icon (5).svg'
    };

    this.cans.push(can1);
    this.cans.push(can2);
    this.cans.push(can3);
    this.cans.push(can4);
    this.cans.push(can5);
   }

  ngOnInit() {

  }

  onChoose(can: Can) {
    this.selectedCan =  Object.assign({}, can);
  }

  ejectCan() {
    this.$successfulPayment.next(this.selectedCan);
  }

  fetchAllCansAmount() {
    let amountTotal = 0;
    this.cans.forEach((can: Can) => {
      amountTotal = amountTotal + can.amount;
    });
    return amountTotal;
  }
}
