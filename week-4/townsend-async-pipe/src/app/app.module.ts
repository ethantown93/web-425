/*
============================================
; Title:  townsend-assignment-4.4
; Author: Ethan Townsend
; Date:   7/31/2019
; Description: web-425
;===========================================
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {FruitService} from "./fruit.service";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [FruitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
