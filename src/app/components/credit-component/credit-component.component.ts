// tslint:disable-next-line: max-line-length
import { Component, OnInit, Output, EventEmitter, Input, ElementRef, ViewChild, Renderer2, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-credit-component',
  templateUrl: './credit-component.component.html',
  styleUrls: ['./credit-component.component.scss']
})
export class CreditComponentComponent implements OnInit, AfterViewInit, OnChanges  {

  @Input() disabled: boolean;

  @Output() paymentProceeded: EventEmitter<any> = new EventEmitter();

  @ViewChild('creditTap', {static: false}) creditTap: ElementRef;

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

  onSubmit() {
    if (this.disabled) {
      return;
    }
    this.paymentProceeded.emit();
  }

  active() {
    if (this.disabled) {
      this.render.addClass(this.creditTap.nativeElement, 'disabled');
    } else {
      this.render.removeClass(this.creditTap.nativeElement, 'disabled');
    }
  }

}
