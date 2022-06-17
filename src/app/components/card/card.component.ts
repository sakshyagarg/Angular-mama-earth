import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() product!: Product;
  count!: number;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {}

  addToCart() {
    this.cartService.addToCart(this.product, Date.now());
    this.count= this.cartService.getCount();
    this.cartService.cartSubject.next(this.count);
    console.log(this.cartService.showCarts());
    // this.router.navigate(['/cart']);
  }
}
