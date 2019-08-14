/*
============================================
; Author: Ethan Townsend
; Date:   8/12/2019
; Description: web-425
;===========================================
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import {NavComponent } from './nav/nav.component'
import { SideNavComponent } from './side-nav/side-nav.component';
import { FormComponent } from './form/form.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule, MatMenuModule, MatToolbarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SideNavComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule, 
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

