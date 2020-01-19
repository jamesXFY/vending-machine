import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Can } from './can';
@Component({
  selector: 'app-can-component',
  templateUrl: './can-component.component.html',
  styleUrls: ['./can-component.component.scss']
})
export class CanComponentComponent implements OnInit, AfterViewInit {

  @Input() can: Can;
  @Input() $successfulPayment: Observable<Can>;
  @Input() $restoreCansSubject: Observable<string>;

  @Output() beChosed: EventEmitter<Can> = new EventEmitter();

  @ViewChild('amountInput', {static: true}) restoreInput: ElementRef;


  public clickAble = true;


  constructor(private render: Renderer2) { }

  ngOnInit() {
    this.$successfulPayment.subscribe((can: Can) => {
      if (can.type === this.can.type && can.name === this.can.name && this.can.amount > 0) {
        this.can.amount = this.can.amount - 1;
        if (this.can.amount <= 0) {
          this.clickAble = false;
        }
      }
    });
  }

  ngAfterViewInit() {
    this.$restoreCansSubject.subscribe((restore: string) => {
      if (restore === 'restore') {
        this.restoreCans();
      } else {
        this.finishRestore();
      }
    });
}

  onClick() {
    if (!this.clickAble) {
      return;
    }
    this.beChosed.emit(this.can);
  }

  addCans(event) {
    const amount = parseInt(event.target.value, 10);
    if (isNaN(amount) || event.target.value <= 0) {
      this.can.amount = 0;
      return;
    }
    this.clickAble = true;
    this.can.amount = event.target.value;
  }

  restoreCans() {
    this.clickAble = false;
    this.render.removeClass(this.restoreInput.nativeElement, 'invisible');
    this.render.addClass(this.restoreInput.nativeElement, 'visible');
  }

  finishRestore() {
    if (this.can.amount > 0) {
      this.clickAble = true;
    }
    this.render.removeClass(this.restoreInput.nativeElement, 'visible');
    this.render.addClass(this.restoreInput.nativeElement, 'invisible');
  }
}
