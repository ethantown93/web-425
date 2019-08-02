/*
============================================
; Title:  townsend-assignment-4.4
; Author: Ethan Townsend
; Date:   7/31/2019
; Description: web-425
;===========================================
*/

import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Fruit } from './fruit'
import { FruitService } from './fruit.service';

@Component({
  selector: 'app-root',
  template: `
  <br /><br />

  <div class="container">
  <h2>Lovely Fruits</h2>            
  <table class="table table-striped">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Price</th>
        <th>Quantity</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor='let fruit of fruits | async'>
        <td>{{fruit.id}}</td>
        <td>{{fruit.name}}</td>
        <td>{{fruit.pricePerPound}}</td>
        <td>{{fruit.quantity}}</td>
      </tr>
    </tbody>
  </table>
</div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  fruits: Observable<Fruit[]>
  title = 'app';

  constructor(private fruitService: FruitService) {}

  ngOnInit() {
    this.fruits = this.fruitService.getFruit();
  }

}
