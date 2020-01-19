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
      type: 'item1',
      name: 'item1',
      price: 12.33,
      amount: 1,
      icon: 'icon (1).svg'
    };

    const can2: Can = {
      type: 'item2',
      name: 'item2',
      price: 12.33,
      amount: 2,
      icon: 'icon (2).svg'
    };

    const can3: Can = {
      type: 'item3',
      name: 'item3',
      price: 12.33,
      amount: 3,
      icon: 'icon (3).svg'
    };

    const can4: Can = {
      type: 'item4',
      name: 'item4',
      price: 12.33,
      amount: 4,
      icon: 'icon (4).svg'
    };

    const can5: Can = {
      type: 'item5',
      name: 'item5',
      price: 12.33,
      amount: 5,
      icon: 'icon (5).svg'
    };

    const can6: Can = {
      type: 'item6',
      name: 'item6',
      price: 12.33,
      amount: 6,
      icon: 'icon (6).svg'
    };

    const can7: Can = {
      type: 'item7',
      name: 'item7',
      price: 12.33,
      amount: 7,
      icon: 'icon (7).svg'
    };

    const can8: Can = {
      type: 'item8',
      name: 'item8',
      price: 12.33,
      amount: 8,
      icon: 'icon (8).svg'
    };

    const can9: Can = {
      type: 'item9',
      name: 'item9',
      price: 12.33,
      amount: 9,
      icon: 'icon (9).svg'
    };

    const can10: Can = {
      type: 'item10',
      name: 'item10',
      price: 12.33,
      amount: 10,
      icon: 'icon (10).svg'
    };

    this.cans.push(can1);
    this.cans.push(can2);
    this.cans.push(can3);
    this.cans.push(can4);
    this.cans.push(can5);
    this.cans.push(can6);
    this.cans.push(can7);
    this.cans.push(can8);
    this.cans.push(can9);
    this.cans.push(can10);
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
