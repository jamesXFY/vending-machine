import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendingMachingComponentComponent } from './vending-maching-component.component';

describe('VendingMachingComponentComponent', () => {
  let component: VendingMachingComponentComponent;
  let fixture: ComponentFixture<VendingMachingComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendingMachingComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendingMachingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
