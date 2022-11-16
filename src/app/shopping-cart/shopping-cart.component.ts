import { Component, OnInit } from '@angular/core';
import { CartItem } from './cart-item';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  cartItems$ = this.shoppingCartService.items$;

  total$ = this.shoppingCartService.total$;

  constructor( private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
  }

  deleteItem(itemToDelete: CartItem): void {
    this.shoppingCartService.deleteItem(itemToDelete)
  }

}
