import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  showCart: boolean = false;
  cart: Array<number> = [];

  constructor(private uiService: UiService, private cartService: CartService) { }

  ngOnInit(): void {
    this.uiService.showCart.subscribe((show: boolean) => {this.showCart = show});
    this.cartService.cart.subscribe((cart: Array<number>) => {this.cart = cart});
  }

  closeCart() {
    this.uiService.closeCart();
  }


}
