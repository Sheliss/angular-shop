import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor() { }

  //Cart

  private showCartData  = new BehaviorSubject<boolean>(false);
  showCart = this.showCartData.asObservable();

  openCart() {
    this.showCartData.next(true);
  }

  closeCart() { 
    this.showCartData.next(false);
  }
}
