import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/Item';
import { ShopService } from 'src/app/services/shop.service';

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
    image: 'NULL',
    price: 0,
    rating: {
      rate: 0,
      count: 0
    },
    title: 'No title'
  };

  constructor(private route: ActivatedRoute, private shopService: ShopService) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id')!;
    this.shopService.getSingleProduct(this.productId).subscribe((item: Item) => (this.item = item));
  }

  test() {
    console.log(this.item);

  }

}
