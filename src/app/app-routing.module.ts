import { SingleProductComponent } from './component/single-product/single-product.component';
import { ProductComponent } from './component/product/product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';


const routes: Routes = [

  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'products', component: ProductComponent },
  { path: 'product', component: SingleProductComponent },
  { path: 'home', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
