/*
============================================
; Title:  townsend-assignment-2.3
; Author: Ethan Townsend
; Date:   7/17/2019
; Description: web-425
;===========================================
*/


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <br /><br /><br />
 
    <div class="container-fluid two-way-form">
      <h2>Two-Way Binding Example</h2><br />
      <div class="form-group">
          <input class="form-control" type="text" 
                 placeholder="Enter your name ..."
                 [(ngModel)]="name">
          <button class="btn btn-primary form-control" (click)="name=''">Clear Name</button>
      </div>
      <div class="form-group">
          <p class="alert-success">Welcome to two-way binding, {{name}}! </p>
      </div>
        
      
    </div>
  `,
  styles: [
    `
      .two-way-form {
        width: 50%; 
      }
    `
  ]
})
export class AppComponent {
  name: string;
}