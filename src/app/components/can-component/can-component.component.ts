import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Can } from './can';
@Component({
  selector: 'app-can-component',
  templateUrl: './can-component.component.html',
  styleUrls: ['./can-component.component.scss']
})
export class CanComponentComponent implements OnInit, AfterViewInit {

  get Amount(): number {
    return this.can.amount;
  }

  @Input() can: Can;
  @Input() $successfulPayment: Observable<Can>;
  @Input() $restoreCansSubject: Observable<string>;

  @Output() beChosed: EventEmitter<Can> = new EventEmitter();

  @ViewChild('amountInput', {static: true}) restoreInput: ElementRef;


  private clickAble = true;


  constructor(private render: Renderer2) { }

  ngOnInit() {
    this.$successfulPayment.subscribe((can: Can) => {
      if (can === this.can) {
        this.can.amount = this.can.amount - 1;
      }
    });
  }

  ngAfterViewInit() {
    console.log(this.restoreInput);
    this.$restoreCansSubject.subscribe((restore: string) => {
      if (restore === 'restore') {
        this.restoreCans();
      } else {
        this.finishRestore();
      }
    });
}

  onClick() {
    this.beChosed.emit(this.can);
  }

  addCans(event) {
    if (event.target.value <= 0) {
      this.can.amount = 0;
    }
    this.can.amount = event.target.value;
  }

  restoreCans() {
    this.clickAble = false;
    this.render.removeClass(this.restoreInput.nativeElement, 'invisible');
    this.render.addClass(this.restoreInput.nativeElement, 'visible');
  }

  finishRestore() {
    this.clickAble = true;
    this.render.removeClass(this.restoreInput.nativeElement, 'visible');
    this.render.addClass(this.restoreInput.nativeElement, 'invisible');
  }
}
