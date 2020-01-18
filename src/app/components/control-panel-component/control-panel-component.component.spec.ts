import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPanelComponentComponent } from './control-panel-component.component';

describe('ControlPanelComponentComponent', () => {
  let component: ControlPanelComponentComponent;
  let fixture: ComponentFixture<ControlPanelComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlPanelComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlPanelComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
