import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GoogleComponent} from './google.component';

const routes: Routes = [
  {path: '', component: GoogleComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoogleRoutingModule {
}
