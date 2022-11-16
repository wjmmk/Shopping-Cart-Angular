import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';
import { mapProductToCartItem } from './helpers/map-product-to-cart-item.helper';
import { Product } from './product';

@Component({
  selector: 'app-catalog-product',
  templateUrl: './catalog-product.component.html',
  styleUrls: ['./catalog-product.component.scss']
})
export class CatalogProductComponent implements OnInit {

  @Input() product!: Product;

  constructor(private scService: ShoppingCartService) { }

  ngOnInit(): void {
  }

  addToCart(): void {
    const cartItem = mapProductToCartItem(this.product);
    this.scService.addItem(cartItem);
  }

}
