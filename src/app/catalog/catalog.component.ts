import { Component, OnInit } from '@angular/core';
import { CatalogService } from './catalog.service';
import { Product } from './product';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  get products(): Product[] {
    return this.catalogService.products;
  }

  constructor(private catalogService: CatalogService) { }

  ngOnInit(): void {
  }

}
