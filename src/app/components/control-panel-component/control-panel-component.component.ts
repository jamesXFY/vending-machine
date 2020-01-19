import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Can } from '../can-component/can';

@Component({
  selector: 'app-control-panel-component',
  templateUrl: './control-panel-component.component.html',
  styleUrls: ['./control-panel-component.component.scss']
})
export class ControlPanelComponentComponent implements OnInit, OnChanges {
  private cashChange:number = 0;
  private receivedCash:number = 0;

  public cashInputDisabled : boolean = true;
  public creditInputDisabled : boolean = true;

  @Input() can:Can;

  @Output() paymentDone:EventEmitter<Can> =new EventEmitter();

  constructor() { }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void{
    if(changes.hasOwnProperty('can') && !changes['can'].isFirstChange()){
      this.cashInputDisabled = this.can.amount<=0;
      this.creditInputDisabled = this.can.amount<=0;
    }
  }

  onCashSubmit(event:number){
    let cashAmount = event;
    this.receivedCash = this.receivedCash + cashAmount;
    // message, price: $XXX, received : $XXX
    if(this.receivedCash >= this.can.price){
      this.cashChange = this.receivedCash - this.can.price;
      this.cashInputDisabled = true;
      this.receivedCash = 0;
      this.paymentDone.emit(this.can);
    }
    
  }

  onCreditSubmit(){
    // message, price: $XXX, received : $XXX
    this.paymentDone.emit();
  }
}
