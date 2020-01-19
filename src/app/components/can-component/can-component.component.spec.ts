import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanComponentComponent } from './can-component.component';
import { By } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { Can } from './can';

describe('CanComponentComponent', () => {
  let component: CanComponentComponent;
  let fixture: ComponentFixture<CanComponentComponent>;
  let $successfulPayment: Subject<Can> = new Subject<Can>();
  let $restoreCansSubject: Subject<string> = new Subject<string>();
  let can: Can;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ CanComponentComponent ]
    });

    $successfulPayment = new Subject<Can>();
    $restoreCansSubject = new Subject<string>();
    can = {
      type: 'test',
      name: 'test',
      price: 12.33,
      amount: 20,
      icon: 'icon (1).svg'
    };

    fixture = TestBed.createComponent(CanComponentComponent);
    component = fixture.componentInstance;

    component.$successfulPayment = $successfulPayment.asObservable();
    component.$restoreCansSubject = $restoreCansSubject.asObservable();
    component.can = can;

    fixture.detectChanges();
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });

  it('can should be emitted', () => {
    const clickSpy = spyOn(component.beChosed, 'emit');
    component.clickAble = true;
    component.onClick();
    expect(clickSpy).toHaveBeenCalledWith(component.can);
  });

  it('can should not be emitted', () => {
    const clickSpy = spyOn(component.beChosed, 'emit');
    component.clickAble = false;
    component.onClick();
    expect(clickSpy).not.toHaveBeenCalled();
  });

  it('can amount should be modified', () => {
    const event = {target: {value: '100'}};

    component.addCans(event);
    expect(component.can.amount).toEqual(100);

    event.target.value = 'abc';
    component.addCans(event);
    expect(component.can.amount).toEqual(0);

    event.target.value = '-1';
    component.addCans(event);
    expect(component.can.amount).toEqual(0);

    event.target.value = '';
    component.addCans(event);
    expect(component.can.amount).toEqual(0);
  });

  it('div is not clickable and visible', () => {
    component.restoreCans();
    const container = fixture.debugElement.query(By.css('.item-container')).nativeElement;
    const input = fixture.debugElement.query(By.css('input')).nativeElement;

    expect(component.clickAble).toBe(false);
    expect(input.classList).toContain('visible');

    component.finishRestore();

    expect(component.clickAble).toBe(true);
    expect(input.classList).toContain('invisible');

  });


});
