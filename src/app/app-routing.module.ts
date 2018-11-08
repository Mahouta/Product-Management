import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent} from './products/products.component';
import { ProductDetailGuard } from './product-detail.guard';

const routes: Routes = [
  { path: 'product/:id',
           canActivate: [ProductDetailGuard],
           component: ProductDetailComponent },
           
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: '**', redirectTo: 'home' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
