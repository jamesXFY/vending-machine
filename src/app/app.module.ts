import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CanComponentComponent } from './components/can-component/can-component.component';
import { ControlPanelComponentComponent } from './components/control-panel-component/control-panel-component.component';
import { CashComponentComponent } from './components/cash-component/cash-component.component';
import { CreditComponentComponent } from './components/credit-component/credit-component.component';
import { VendingMachingComponentComponent } from './components/vending-maching-component/vending-maching-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CanComponentComponent,
    ControlPanelComponentComponent,
    CashComponentComponent,
    CreditComponentComponent,
    VendingMachingComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
