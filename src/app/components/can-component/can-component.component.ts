import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Can } from './can';
@Component({
  selector: 'app-can-component',
  templateUrl: './can-component.component.html',
  styleUrls: ['./can-component.component.scss']
})
export class CanComponentComponent implements OnInit {

  get Amount():number{
    return this.can.amount;
  }

  @Input() can:Can;
  @Input() $successfulPayment:Observable<Can>;

  @Output() beChosed: EventEmitter<Can>= new EventEmitter();


  constructor() { }

  ngOnInit() {
    this.$successfulPayment.subscribe((can:Can)=>{
      if(can === this.can){
        this.can.amount = this.can.amount-1;
      }
    })
  }

  onClick(){
    this.beChosed.emit(this.can);
  }
}
