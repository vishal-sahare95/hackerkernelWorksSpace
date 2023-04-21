import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Day1normalRoutingModule } from './day1normal-routing.module';
import { InterpolatinComponent } from './interpolatin/interpolatin.component';
import { PropertBindComponent } from './propert-bind/propert-bind.component';


@NgModule({
  declarations: [
    InterpolatinComponent,
    PropertBindComponent
  ],
  imports: [
    CommonModule,
    Day1normalRoutingModule
  ],
  exports:[
    InterpolatinComponent,
    PropertBindComponent
  ]
})
export class Day1normalModule { }
