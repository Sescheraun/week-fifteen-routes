import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooComponent } from './foo/foo.component';
import { BarComponent } from './bar/bar.component';
import { CowComponent } from './cow/cow.component';

const routes: Routes = [
  {path: '', component: CowComponent}
  , {path: 'foo', component: FooComponent}
  , {path: 'bar', component: BarComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
