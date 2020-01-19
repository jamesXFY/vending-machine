import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-credit-component',
  templateUrl: './credit-component.component.html',
  styleUrls: ['./credit-component.component.scss']
})
export class CreditComponentComponent implements OnInit {

  @Input() disabled: boolean;

  @Output() paymentProceeded: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.disabled) {
      return;
    }
    this.paymentProceeded.emit();
  }

}
