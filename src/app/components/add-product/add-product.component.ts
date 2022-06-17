import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  product: Product = {
    id: 0,
    name: '',
    price: 0,
    category: 'face',
    img: '',
    description: '',
  };
  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  addProduct() {
    console.log(this.product);
    this.productService.addProduct(this.product).subscribe({
      next: (response: any) => {
        console.log();
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
