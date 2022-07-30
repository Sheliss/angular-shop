import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private uiService: UiService) { }

  ngOnInit(): void {
  }

  goHome() {
    this.router.navigateByUrl('');
  }

  openCart() {
    this.uiService.openCart();
  }

  goToAbout() {
    this.router.navigateByUrl('about');
  }
}
