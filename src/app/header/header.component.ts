import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleCartVisibility = new EventEmitter<void>();
  @Output() toggleMenu = new EventEmitter<void>();

  constructor( private scService: ShoppingCartService) { }

  itemsCount$ = this.scService.itemsCount$;

  ngOnInit(): void {
  }

  onCartClicked(): void {
    this.toggleCartVisibility.emit();
  }

  onMenuClicked(): void {
    this.toggleMenu.emit();
  }

}
