import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CatalogService } from './catalog.service';
import { Product } from './product';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  products$ = this.catalogService.products$;

  orderBy$: Observable<string | null> = this.route.queryParamMap.pipe(
    map((queryParamMap) => queryParamMap.get('orderBy'))
  );

  orderedProducts$: Observable<Product[]> = combineLatest([
    this.products$,
    this.orderBy$
  ]).pipe(
    map(([products, orderBy]) => 
      orderBy === 'price' ? [...products].sort((a, b) => a.price - b.price) : products
    )
  );

  constructor(
    private catalogService: CatalogService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

}
