import { Component, OnInit, Renderer2, ViewChildren, QueryList, ElementRef, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-cash-component',
  templateUrl: './cash-component.component.html',
  styleUrls: ['./cash-component.component.scss']
})
export class CashComponentComponent implements OnInit {
  private paymentAmount = 5;

  @Input() disabled: boolean;

  @Output() paymentProceeded: EventEmitter<any> = new EventEmitter();

  @ViewChildren('.priceOption') priceOptions: QueryList<ElementRef>;

  constructor(private render: Renderer2) { }

  ngOnInit() {
  }

  onClick(event) {
    if (this.disabled) {
      return;
    }
    this.paymentAmount = parseFloat(event);
    this.paymentProceeded.emit(this.paymentAmount);
  }

}
