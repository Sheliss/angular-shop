import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/Interfaces';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  showCart: boolean = false;
  cart: Cart[] = [];

  constructor(private uiService: UiService, private cartService: CartService) { }

  ngOnInit(): void {
    this.uiService.showCart.subscribe((show: boolean) => {this.showCart = show});
    this.cartService.cart.subscribe((cart: Cart[]) => {this.cart = cart});
  }

  closeCart() {
    this.uiService.closeCart();
  }


}
