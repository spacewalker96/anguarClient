import { Photo } from './../../model/photo';
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
  photos:Photo[];
  message = '';

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.message = '';

    this.listProducts();
    // this.listImages();
    // this.listProducts(this.route.snapshot.params.id);

  }


  listProducts() {
    this.productService.getAll().subscribe(
      data => {
        this.products = data;
        console.log(data)

      }
    )
  }
  // listImages() {
  //   this.productService.getImage().subscribe(
  //     data => {
  //       this.photos = data;
  //       console.log(data)
  //     }
  //   )
  // }

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
