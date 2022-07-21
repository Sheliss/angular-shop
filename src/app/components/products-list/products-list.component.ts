import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/services/shop.service';
import { Item } from 'src/app/Item';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  items: Item[] = [];
  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
   this.shopService.getProducts().subscribe((items: Item[]) => (this.items = items));
  }

  test() {
    console.log(this.items)
  }

}