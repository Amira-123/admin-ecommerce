import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';





@NgModule({
  declarations: [
    AllProductsComponent,


  ],
  imports: [
    CommonModule,
    SharedModule,

    RouterModule,
  ],
  exports:[
  

   AllProductsComponent
  ]
})
export class ProductsModule { }
