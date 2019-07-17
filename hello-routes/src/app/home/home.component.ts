/*
============================================
; Title:  townsend-assignment-2.4
; Author: Ethan Townsend
; Date:   7/17/2019
; Description: web-425
;===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class='container'>
    <div class='row'>
      <h2>Welcome to the Home component!</h2>
    </div>
  </div>
  `,
  styles: [`
    .container {
      margin-top: 20px;
    }

    h2 {
      color: dodgerblue;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
