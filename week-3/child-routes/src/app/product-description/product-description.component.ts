import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-description',
  template: `
  <p>This is a fantastic product! YAY!</p>
  `,
  styles: []
})
export class ProductDescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
