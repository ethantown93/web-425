/*
============================================
; Author: Ethan Townsend
; Date:   8/12/2019
; Description: web-425
;===========================================
*/

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PriceQuote } from './price-quote';
import { interval } from 'rxjs/index';

@Component({
  selector: 'app-price-quote',
  template: `
    <strong>
      Inside PriceQuoteComponent
      {{ priceQuote?.stockSymbol }}
      {{ priceQuote?.lastPrice }}
    </strong>
  `,
  styles: [`
    :host { background-color: pink; }
  `]
})
export class PriceQuoteComponent implements OnInit {

  @Output() lastPrice = new EventEmitter<PriceQuote>();

  priceQuote: PriceQuote;

  constructor() { 
    interval(2000)
      .subscribe(data => {
        this.priceQuote = {
        stockSymbol: 'IBM',
        lastPrice: 100 * Math.random()
      };
      
      this.lastPrice.emit(this.priceQuote);
    });
   }

  ngOnInit() {
  }

}
