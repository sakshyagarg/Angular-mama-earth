import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  count!: number;
  carts: Cart[] = [];
  total: number = 0;
  quantity: number = 1;
  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.carts = this.showCarts();
    this.getTotal();
  }

  showCarts() {
    return this.cartService.showCarts();
  }

  noItemsInCart() {
    this.router.navigate(['']);
  }

  deleteProduct(product: Product) {
    this.cartService.deteteProduct(product);
    this.count = this.cartService.getCount();
    this.cartService.cartSubject.next(this.count);
    this.carts = this.showCarts();
    this.getTotal();
  }

  onChange(quantity: number, timestamp: number) {
    this.cartService.updateProductQuantity(timestamp, quantity);
    this.getTotal();
  }

  getTotal() {
    this.total = 0;
    for (let cart of this.carts) {
      this.total += cart.product.price * cart.quantity;
    }
  }
}
