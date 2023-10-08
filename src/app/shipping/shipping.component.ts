import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent implements OnInit {

  constructor(private cartService: CartService) {}

  /* Observable is a class provided by the RxJS library. It is commonly used in Angular applications for handling asynchronous operations and managing data streams.
  In the context of `shippingCosts`, it is expected to be observable, which can emit a sequence of values over time.
  {type: string, price: number} -> this is the type of object to be expected i.e Observable emits

  the exclamation mark ! is used as a non-null assertion operator. It tells the TypeScript compiler that you are asserting that a variable or expression will not be
  null or undefined, even though TypeScript's type system would normally consider it nullable.
  */
  shippingCosts! : Observable<{type: string, price: number}[]>;

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
  }
}
