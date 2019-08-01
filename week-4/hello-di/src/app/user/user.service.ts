/*
============================================
; Title:  townsend-assignment-4.2
; Author: Ethan Townsend
; Date:   7/31/2019
; Description: web-425
;===========================================
*/


import { Injectable } from '@angular/core';
import { getDefaultService } from 'selenium-webdriver/opera';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUser(): User { 
    return new User( 1, "Jack",'Daniels', "100 main street" );
  }

  constructor() {
      
    } 
}
