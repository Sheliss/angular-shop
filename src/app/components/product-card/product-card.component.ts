import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/Interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() item: Item = {
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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToProduct() {
    this.router.navigateByUrl('/product/' + this.item.id)
  }

}
