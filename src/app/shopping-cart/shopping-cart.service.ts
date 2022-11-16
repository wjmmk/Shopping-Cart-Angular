import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from './cart-item';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private items = new BehaviorSubject<CartItem[]>([]);
  items$ = this.items.asObservable();


  itemsCount$: Observable<number> = this.items$.pipe(
    map( (items) => items.length)
  );

  total$: Observable<number> = this.items$.pipe(
    map( (items) => items.reduce((acc, { price }) => (acc += price), 0))
  );

  constructor() { }

  addItem(item: CartItem): void {
    this.items.next([...this.items.value, item]);
  }

  deleteItem(itemToDelete: CartItem): void {
    this.items.next(this.items.value.filter( item => item !== itemToDelete))
  }

}
