import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//ActivateRoute is specific to each component that the Angular Router loads. Contains information about the route and the route's parameter.

import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap; //get the params from current route
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }

  addProductToCart(product : Product){
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
