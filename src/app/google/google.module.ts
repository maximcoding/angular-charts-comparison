import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { GoogleComponent } from './google.component';
import {GoogleRoutingModule} from './google-routing.module';



@NgModule({
  declarations: [
    GoogleComponent
  ],
  imports: [
    CommonModule,
    GoogleRoutingModule
  ]
})
export class GoogleModule {
}
