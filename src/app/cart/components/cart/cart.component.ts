import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import Product from 'src/app/product-component/models/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  selectedProducts: Product[];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.getAllProducts();
  }

  private getAllProducts() {
    this.selectedProducts = this.cartService.getSelectedProducts();
  }
}
