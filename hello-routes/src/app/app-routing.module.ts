/*
============================================
; Title:  townsend-assignment-2.4
; Author: Ethan Townsend
; Date:   7/17/2019
; Description: web-425
;===========================================
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModule { }
