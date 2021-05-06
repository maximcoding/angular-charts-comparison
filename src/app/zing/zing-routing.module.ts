import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ZingComponent} from './zing.component';

const routes: Routes = [
  {path: '', component: ZingComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZingRoutingModule {
}
