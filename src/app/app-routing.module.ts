import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BridgeComponent } from './bridge/bridge.component';
import { CabinsComponent } from './cabins/cabins.component';
import { EngineeringComponent } from './engineering/engineering.component';

const routes: Routes = [
  {path: '', component: BridgeComponent}
  , {path: 'engineering', component: EngineeringComponent}
  , {path: 'cabins', component: CabinsComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
