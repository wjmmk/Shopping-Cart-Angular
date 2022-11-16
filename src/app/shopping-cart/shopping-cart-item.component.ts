import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from './cart-item';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.scss']
})
export class ShoppingCartItemComponent implements OnInit {

  @Input() cartItem!: CartItem;
  @Output() cartItemDelete = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  eliminarArticulo(): void {
    this.cartItemDelete.emit();
  }

}
