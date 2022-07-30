import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {path: '', component: ProductsListComponent},
  {path: 'product/:id', component: ProductPageComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
