import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { CustomerslistviewComponent } from './customerslistview.component';
import { CustomerscardviewComponent } from './customerscardview.component';



@NgModule({
  declarations: [CustomersComponent, CustomerslistviewComponent, CustomerscardviewComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
