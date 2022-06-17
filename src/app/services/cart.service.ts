import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Cart } from '../models/cart';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartSubject = new Subject<any>()
  carts: Cart[] = [];
  constructor() {}
  addToCart(product: Product, timestamp: number) {
    for(let cart of this.carts) {
      if(cart.product.name===product.name) {
        cart.quantity++;
        return;
      }
    }
    this.carts.push({
      quantity: 1,
      price: product.price,
      product: product,
      timestamp: timestamp,
    });
  }

  updateProductQuantity(timestamp: number, quantity: number) {
    this.carts = this.carts.map((cart) => {
      if (timestamp === cart.timestamp) {
        return {
          quantity: quantity,
          price: cart.price,
          product: cart.product,
          timestamp: timestamp,
        };
      }
      return cart;
    });
  }

  showCarts() {
    return this.carts;
  }

  deteteProduct(product: Product) {
    this.carts = this.carts.filter(
      (cart) => product.name !== cart.product.name
    );
  }

  getCount() {
    return this.carts.length;
  }
}
