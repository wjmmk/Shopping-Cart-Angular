import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingCartService } from 'src/app/shopping-cart/shopping-cart.service';
import { CatalogService } from '../catalog.service';
import { Product } from '../product';
import { mapProductToCartItem } from '../helpers/map-product-to-cart-item.helper';
import { map, switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  id$: Observable<number> = this.route.paramMap.pipe(
    map((paramMap) => Number(paramMap.get('id')))
  )
  product$: Observable<Product | null> = this.id$.pipe(
    switchMap(id => this.catalogService.getProduct(id)),
    tap(product => product === null && this.router.navigate(['catalog']))
  )

  constructor(
    private catalogService: CatalogService,
    private scService: ShoppingCartService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {}

  addToCart(product: Product): void {
    const cartItem = mapProductToCartItem(product);
    this.scService.addItem(cartItem);
  }

}
