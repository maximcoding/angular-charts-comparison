import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Ng2Component} from './ng2container/ng2/ng2.component';
import {NgxComponent} from './ngxchartscontainer/ngx/ngx.component';

const routes: Routes = [
  {path: 'ng2charts', component: Ng2Component},
  {path: 'ngxcharts', component: NgxComponent},
  // {path: 'GoogleModule', loadChildren: () => import('./google/google.module').then(m => m.GoogleModule)},
  {path: 'ZingCharts', loadChildren: () => import('./zing/zing.module').then(m => m.ZingModule)},
  {path: 'FusionCharts', loadChildren: () => import('./fusion/fusion.module').then(m => m.FusionModule)},
  {path: '', redirectTo: '/ZingCharts', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
