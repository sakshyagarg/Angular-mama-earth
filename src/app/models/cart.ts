import { Product } from "./product";

export interface Cart {
    timestamp: number;
    quantity: number;
    price: number;
    product: Product;
}