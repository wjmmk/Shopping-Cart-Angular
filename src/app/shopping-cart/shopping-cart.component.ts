import { Component, OnInit } from '@angular/core';
import { CartItem } from './cart-item';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  get cartItems(): CartItem[] {
    return this.shoppingCartService.items;
  }

  get total(): number {
    return this.shoppingCartService.total;
  }

  constructor( private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
  }

  deleteItem(itemToDelete: CartItem): void {
    this.shoppingCartService.deleteItem(itemToDelete)
  }

}
