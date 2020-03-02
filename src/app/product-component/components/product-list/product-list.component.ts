import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import Product from '../../models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.products = this.productsService.getProducts();
  }

}
