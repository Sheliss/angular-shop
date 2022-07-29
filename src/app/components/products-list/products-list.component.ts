import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/services/shop.service';
import { Item } from 'src/app/Interfaces';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  items: Item[] = [];
  shownItems: number = 8;
  filteredItems: Item[] = [];
  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
   this.shopService.getProducts().subscribe((items: Item[]) => (this.items = items));
   this.shopService.getProducts().subscribe((items: Item[]) => (this.filteredItems = items));
  }

  showMore() {
    this.shownItems += 8;
  }

  onFilterClick(data: string) {
    switch (data) {
      case 'all': {
        this.filteredItems = this.items;
        break;
      }
      case 'men' : {
        this.filteredItems = this.items.filter(item => item.category === 'men\'s clothing');
        break;
      }
      case 'women' : {
        this.filteredItems = this.items.filter(item => item.category === 'women\'s clothing');
        break;
      }
      case 'jewel' : {
        this.filteredItems = this.items.filter(item => item.category === 'jewelery');
        break;
      }
      case 'electro' : {
        this.filteredItems = this.items.filter(item => item.category === 'electronics');
        break;
      }
      default : {
        console.error('Unknown filter value');
      }
    }
  }

}
