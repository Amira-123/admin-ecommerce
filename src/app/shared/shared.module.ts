import { AllProductsComponent } from './../products/components/all-products/all-products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { SelectComponent } from './components/select/select.component';





@NgModule({
  declarations: [
    HeaderComponent,
   
    SelectComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule




  ],
  exports:[
    HeaderComponent,
    BrowserModule,
    SelectComponent,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
