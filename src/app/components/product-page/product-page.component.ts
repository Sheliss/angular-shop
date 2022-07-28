import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/Interfaces';
import { ShopService } from 'src/app/services/shop.service';
import { CartService } from 'src/app/services/cart.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  productId: string = '-1';
  item: Item = {
    category: 'No category',
    description: 'No description',
    id: -1,
    image: 'No image',
    price: 0,
    rating: {
      rate: 0,
      count: 0
    },
    title: 'No title'
  };

  constructor(private route: ActivatedRoute, 
    private shopService: ShopService, 
    private cartService: CartService,
    private uiService: UiService) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id')!;
    
    this.shopService.getSingleProduct(this.productId).subscribe((item: Item) => (this.item = item));
  }

  addToCart() {
    this.cartService.addItem(this.item.id);
    this.uiService.openCart();
  }


}
