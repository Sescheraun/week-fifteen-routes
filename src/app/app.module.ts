import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BridgeComponent } from './bridge/bridge.component';
import { CabinsComponent } from './cabins/cabins.component';
import { EngineeringComponent } from './engineering/engineering.component';
import { TribbleComponent } from './tribble/tribble.component';

@NgModule({
  declarations: [
    AppComponent,
    BridgeComponent,
    CabinsComponent,
    EngineeringComponent,
    TribbleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
