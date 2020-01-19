import { Component, OnInit, Renderer2, ViewChildren, QueryList, ElementRef, Output, EventEmitter, Input, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-cash-component',
  templateUrl: './cash-component.component.html',
  styleUrls: ['./cash-component.component.scss']
})
export class CashComponentComponent implements OnInit, AfterViewInit, OnChanges {
  private paymentAmount = 5;

  @Input() disabled: boolean;

  @Output() paymentProceeded: EventEmitter<any> = new EventEmitter();

  @ViewChildren('priceOption') priceOptions: QueryList<ElementRef>;

  constructor(private render: Renderer2) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('disabled') && !changes.disabled.isFirstChange()) {
      this.active();
    }
  }

  ngAfterViewInit() {
    this.active();
  }

  onClick(event) {
    this.paymentAmount = parseFloat(event);
    this.paymentProceeded.emit(this.paymentAmount);
  }

  active() {
    if (this.disabled) {
      this.priceOptions.forEach(element => {
        this.render.addClass(element.nativeElement, 'disabled');
      });
    } else {
      this.priceOptions.forEach(element => {
        this.render.removeClass(element.nativeElement, 'disabled');
      });
    }
  }

}
