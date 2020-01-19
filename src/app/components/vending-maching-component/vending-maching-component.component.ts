import { Component, OnInit } from '@angular/core';
import { Can } from '../can-component/can';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-vending-maching-component',
  templateUrl: './vending-maching-component.component.html',
  styleUrls: ['./vending-maching-component.component.scss']
})
export class VendingMachingComponentComponent implements OnInit {
  public selectedCan:Can;

  public cans : Array<Can> = new Array<Can>();
  public $successfulPayment:Subject<Can> = new Subject<Can>();

  constructor() {
    let can1:Can = {
      type:'test',
      name:'test',
      price:12.33,
      amount:20,
      icon:'beveage.png'
    };

    let can2:Can = {
      type:'test1',
      name:'test1',
      price:12.33,
      amount:10,
      icon:'beveage1.png'
    };

    let can3:Can = {
      type:'test3',
      name:'test3',
      price:12.33,
      amount:10,
      icon:'beveage1.png'
    };

    let can4:Can = {
      type:'test4',
      name:'test4',
      price:12.33,
      amount:10,
      icon:'beveage1.png'
    };

    this.cans.push(can1);
    this.cans.push(can2);
    this.cans.push(can3);
    this.cans.push(can4);
   }

  ngOnInit() {

  }

  onChoose(can:Can){
    this.selectedCan = can;
  }

  ejectCan(can:Can){
    console.log(can.amount +"vending");
    this.$successfulPayment.next(can);
  }
}
