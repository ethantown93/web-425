/*
============================================
; Author: Ethan Townsend
; Date:   8/12/2019
; Description: web-425
;===========================================
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FormValExampleComponent } from './form-val-example/form-val-example.component';

import { MatIconModule, MatMenuModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SideNavComponent,
    FormValExampleComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
