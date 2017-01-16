import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy.component';
import { LazyRoutingModule } from './lazy-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LazyRoutingModule
  ],
  declarations: [ LazyComponent ]
})
export class LazyModule {
}
