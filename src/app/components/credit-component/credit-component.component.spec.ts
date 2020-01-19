import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditComponentComponent } from './credit-component.component';
import { By } from '@angular/platform-browser';

describe('CreditComponentComponent', () => {
  let component: CreditComponentComponent;
  let fixture: ComponentFixture<CreditComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditComponentComponent ]
    });

    fixture = TestBed.createComponent(CreditComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });

  it('submit should be trigger by disable', () => {
    const submitSpy = spyOn(component.paymentProceeded, 'emit');
    component.disabled = true;
    component.onSubmit();
    expect(submitSpy).not.toHaveBeenCalled();

    component.disabled = false;
    component.onSubmit();
    expect(submitSpy).toHaveBeenCalled();
  });

  it('credit payment should be activated correct', () => {
    const button = fixture.debugElement.query(By.css('.btn')).nativeElement;

    component.disabled = true;
    component.active();
    expect(button.classList).toContain('disabled');

    component.disabled = false;
    component.active();
    expect(button.classList).not.toContain('disabled');
  });
});
