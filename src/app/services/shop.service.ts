import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Item } from '../Item';
import { Observable, retry, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private apiUri: string = 'https://fakestoreapi.com/products'

  constructor(private http: HttpClient ) { }

  getProducts(): Observable<Item[]> {
    return this.http
      .get<Item[]>(this.apiUri)
      .pipe(retry(3))
      .pipe(catchError( _ => {
        return throwError(() => new Error('Failed to retrieve items data from api.'))
      }))

  }
}
