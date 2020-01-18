import { Component, OnInit } from '@angular/core';
import { Can } from '../can-component/can';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-vending-maching-component',
  templateUrl: './vending-maching-component.component.html',
  styleUrls: ['./vending-maching-component.component.scss']
})
export class VendingMachingComponentComponent implements OnInit {
  private selectedCan:Can;

  public cans : Array<Can> = new Array<Can>();
  public $successfulPayment:Subject<Can> = new Subject<Can>();

  constructor() {
    let can1 = {
      type:'test',
      name:'test',
      price:12.33,
      amount:20,
      icon:''
    };
    this.cans.push(can1);
   }

  ngOnInit() {

  }

  onChoose(can:Can){
    this.selectedCan = can;
  }

  ejectCan(can:Can){
    this.$successfulPayment.next(can);
  }
}
