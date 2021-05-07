import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
const baseUrl = 'http://localhost:8091/produit';
@Injectable({

  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }


  public getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${baseUrl}`);
  }

  // getAll(): Observable<Product[]> {
  //   return this.http.get<Product[]>(baseUrl);
  // }
  // get(id: any): Observable<Product[]> {
  //   return this.http.get<Product[]>(`${baseUrl}/${id}`);
  // }
}
