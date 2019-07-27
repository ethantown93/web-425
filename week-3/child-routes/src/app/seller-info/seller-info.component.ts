import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seller-info',
  template: `
    <p>
      The seller is Chuck Norris, ID {{ sellerId }}
    </p>
  `,
  styles: []
})
export class SellerInfoComponent implements OnInit {

  sellerId: string;

  constructor(route: ActivatedRoute) { 
    this.sellerId = route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
  }

}
