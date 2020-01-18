import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Can } from '../can-component/can';

@Component({
  selector: 'app-control-panel-component',
  templateUrl: './control-panel-component.component.html',
  styleUrls: ['./control-panel-component.component.scss']
})
export class ControlPanelComponentComponent implements OnInit {
  private change:number = 0;

  public cashInputDisabled : boolean = true;
  public creditInputDisabled : boolean = true;

  @Input() can:Can;

  @Output() paymentDone:EventEmitter<Can> =new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onCashSubmit(event:number){
    let cashAmount = event;
    // message, price: $XXX, received : $XXX
    if(cashAmount >= this.can.price){
      this.change = cashAmount - this.can.price;
      this.paymentDone.emit(this.can);
    }
    
  }

  onCreditSubmit(){
    // message, price: $XXX, received : $XXX
    this.paymentDone.emit();
  }
}
