/*
============================================
; Title:  townsend-assignment-1.4
; Author: Ethan Townsend
; Date:   7/10/2019
; Description: web-425
;===========================================
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippingComponent } from './shipping.component';



@NgModule({
  declarations: [ShippingComponent],
  imports: [
    CommonModule
  ],
  exports: [ShippingComponent]
})
export class ShippingModule { }
