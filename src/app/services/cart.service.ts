import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  private cartData = new BehaviorSubject<Array<number>>([]);
  cart = this.cartData.asObservable();

  addItem(id: number) {
    this.cartData.next([...this.cartData.getValue(), id]);
    console.log(this.cart);
  }
}
