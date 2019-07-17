/*
============================================
; Title:  townsend-assignment-1.4
; Author: Ethan Townsend
; Date:   7/10/2019
; Description: web-425
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello from App Component!</h1>
    <app-shipping></app-shipping>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-modules';
}
