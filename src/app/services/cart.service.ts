import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart } from '../Interfaces';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  private cartData = new BehaviorSubject<Cart[]>([]);
  cart = this.cartData.asObservable();

  addItem(id: number) { 
    let tempCart: Cart[] = this.cartData.value;
    if(tempCart.some(el => el.id === id)) {
      tempCart[tempCart.findIndex(el => el.id === id)].amount += 1;
    } else {
      let cartItem: Cart = {
        id: id,
        amount: 1
      }
      tempCart.push(cartItem);
    }
    this.cartData.next(tempCart);
  }

  deleteItem(id: number) {
    let tempCart: Cart[] = this.cartData.value;
    const toDelete: number = tempCart.findIndex(el => el.id === id);
    tempCart.splice(toDelete, 1);
    this.cartData.next(tempCart);
  }
}
