import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanComponentComponent } from './can-component.component';

describe('CanComponentComponent', () => {
  let component: CanComponentComponent;
  let fixture: ComponentFixture<CanComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
