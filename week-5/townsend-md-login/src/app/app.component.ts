/*
============================================
; Title:  townsend-assignment-2.2
; Author: Ethan Townsend
; Date:   8/7/2019
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
  title = 'townsend-md-login';

  username: string;
  password: string;

  onClear() {
    this.username = ''
    this.password = ''
  }

  onSubmit() {
    alert('Username: ' + this.username + '\nPassword: ' + this.password)
  }

}
