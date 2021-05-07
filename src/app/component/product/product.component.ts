import { Product } from './../../model/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Product[];
  message = '';

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.message = '';
    this.listProducts();
    // this.listProducts(this.route.snapshot.params.id);

  }


  listProducts() {
    this.productService.getAll().subscribe(
      data => {
        this.products = data;
      }
    )
  }

  // getProduct(id: string): void {
  //   this.productService.get(id)
  //     .subscribe(
  //       data => {
  //         this.products = data;
  //         console.log(data);
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }


}
