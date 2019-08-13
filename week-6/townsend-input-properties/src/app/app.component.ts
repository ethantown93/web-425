/*
============================================
; Author: Ethan Townsend
; Date:   8/12/2019
; Description: web-425
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'townsend-input-properties';

  stock: string;
  readonly numberOfShares = 100;

  onChangeEvent({ target }) {
    this.stock = target.value;
  }
}
