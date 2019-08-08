/*
============================================
; Title:  townsend-assignment-2.2
; Author: Ethan Townsend
; Date:   8/7/2019
; Description: web-425
;===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string
  password: string

  onClear() {
    this.username = ''
    this.password = ''
  }

  onLogIn() {
    alert('Username: ' + this.username + '\nPassword: ' + this.password)
  }

  constructor() { }

  ngOnInit() {
  }

}
