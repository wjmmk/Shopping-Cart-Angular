import { Injectable } from '@angular/core';
import { CartItem } from './cart-item';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  items: CartItem[] = [];


  get total(): number {
    return this.items.reduce((acc, {price}) => (acc += price), 0)
  }

  get itemsCount(): number {
    return this.items.length;
  }

  constructor() { }

  addItem(item: CartItem): void {
    this.items = [...this.items, item];
  }

  deleteItem(itemToDelete: CartItem): void {
    this.items = this.items.filter( item => item !== itemToDelete )
  }

}
