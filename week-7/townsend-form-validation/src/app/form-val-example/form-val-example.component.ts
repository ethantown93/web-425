/*
============================================
; Author: Ethan Townsend
; Date:   8/12/2019
; Description: web-425
;===========================================
*/ 

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-val-example',
  templateUrl: './form-val-example.component.html',
  styleUrls: ['./form-val-example.component.css']
})
export class FormValExampleComponent implements OnInit {

  onSubmit(formData) {
    console.log(formData);
    alert('You entered: ' + formData.telephone);
  }

  constructor() { }

  ngOnInit() {
  }

}
