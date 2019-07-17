/*
============================================
; Title:  townsend-assignment-2.2
; Author: Ethan Townsend
; Date:   7/17/2019
; Description: web-425
;===========================================
*/


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ name }}</h1>
    <button (click)="changeName()">Change Name</button>
  `,
  styles: [
    `
      h1 {
        color: red;
      }
    `
  ]

})


export class AppComponent {
  title = 'one-way-binding';
  name: string = 'Ethan Townsend';

  changeName() {
    this.name = 'Chuck Noris';
  }
}
