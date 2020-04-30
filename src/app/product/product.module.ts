import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';



@NgModule({
  declarations: [ProductlistComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'product', component: ProductlistComponent }
    ])
  ]
})
export class ProductModule { }
