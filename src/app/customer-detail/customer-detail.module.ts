import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerDetailRoutingModule } from './customer-detail-routing.module';
import { CustomerDetailComponent } from './customer-detail.component';


@NgModule({
  declarations: [CustomerDetailComponent],
  imports: [
    CommonModule,
    CustomerDetailRoutingModule
  ]
})
export class CustomerDetailModule { }
