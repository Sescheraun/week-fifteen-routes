import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BridgeComponent } from './bridge/bridge.component';
import { CabinsComponent } from './cabins/cabins.component';
import { EngineeringComponent } from './engineering/engineering.component';

@NgModule({
  declarations: [
    AppComponent,
    BridgeComponent,
    CabinsComponent,
    EngineeringComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
