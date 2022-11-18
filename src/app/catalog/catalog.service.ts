import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  private products = new BehaviorSubject<Product[]>([
    {
      id: 1,
      imageUrl: 'audifonos.jpg',
      name: 'Auriculares',
      price: 50,
    },
    {
      id: 2,
      imageUrl: 'teclado.webp',
      name: 'Teclado',
      price: 14.5,
    },
    {
      id: 3,
      imageUrl: 'monitor.jpg',
      name: 'Monitor',
      price: 299.99,
    },
    {
      id: 4,
      imageUrl: 'mouse-gamer.webp',
      name: 'Mouse-Gamer',
      price: 40.00
    },
    {
      id: 5,
      imageUrl: 'parlantes.jpg',
      name: 'Parlantes~Sony',
      price: 80.00
    },
    {
      id: 6,
      imageUrl: 'torre.jpg',
      name: '-Gamer',
      price: 950.00
    }
  ]);

  products$ = this.products.asObservable();

  private baseUrl = environment.API_BASE_URL;
  //products$ = this.getAll();

  constructor( private httpClient: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.baseUrl}/catalog/products`);
  }

  getProduct(requestId: number): Observable<Product | null> {
    return this.products$.pipe(
      map(
        (products) => products.find((product) => product.id === requestId) || null
      )
    );
  }

  getProductHttp(requestId: number): Observable<Product | null> {
    return this.httpClient
      .get<Product>(`${this.baseUrl}/catalog/products/${requestId}`)
      .pipe(
        catchError((error) => {
          if(error.status === 404) {
            return of(null)
          }
          return throwError(error)
        })
      )
  }
}
