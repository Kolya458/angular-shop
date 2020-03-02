import { Injectable } from '@angular/core';
import { Products } from 'src/app/mock-products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts() {
    return Products;
  }
}
