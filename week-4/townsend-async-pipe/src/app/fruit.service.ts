/*
============================================
; Title:  townsend-assignment-4.4
; Author: Ethan Townsend
; Date:   7/31/2019
; Description: web-425
;===========================================
*/

import { Injectable } from '@angular/core';
import { Fruit } from './fruit';
import {Observable, of} from "rxjs";
// import 'rxjs/add/observable/of';




@Injectable()
export class FruitService {

  fruits: Fruit [] = [
    { id: 1, name: 'apple', pricePerPound: '$1.00', quantity: 2 },
    { id: 2, name: 'banana', pricePerPound: '$2.00', quantity: 3 },
    { id: 3, name: 'orange', pricePerPound: '$3.00', quantity: 4 },
    { id: 4, name: 'pear', pricePerPound: '$4.00', quantity: 5 },
    { id: 5, name: 'grapefruit', pricePerPound: '$5.00', quantity: 6 }
  ];

  constructor() { }

  getFruit(): Observable<Fruit[]> {
    return of(this.fruits);
  }
}
