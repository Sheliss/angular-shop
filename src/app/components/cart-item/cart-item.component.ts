import { Component, OnInit, Input } from '@angular/core';
import { ShopService } from 'src/app/services/shop.service';
import { Item, Cart } from 'src/app/Interfaces';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() cart: Cart = {
    id: -1,
    amount: 0
  };
  item: Item = {
    category: 'No category',
    description: 'No description',
    id: -1,
    image: 'NULL',
    price: 0,
    rating: {
      rate: 0,
      count: 0
    },
    title: 'No title'
  }

  constructor(private shopService: ShopService, private cartService: CartService) { }

  ngOnInit(): void {
    this.shopService.getSingleProduct(this.cart.id.toString()).subscribe((item: Item) => (this.item = item));
  }

  onDelete() {
    this.cartService.deleteItem(this.item.id);
  }

}
