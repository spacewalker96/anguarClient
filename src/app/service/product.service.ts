import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../model/photo';
import { Product } from '../model/product';
const baseUrl = 'http://localhost:8091/produit';
const baseUrlImg = 'http://localhost:8091/photo';

@Injectable({

  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }


  public getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${baseUrl}`);
  }
  // public getImage(): Observable<Photo[]> {
  //   return this.http.get<Photo[]>(`${baseUrlImg}`);
  // }

  // getAll(): Observable<Product[]> {
  //   return this.http.get<Product[]>(baseUrl);
  // }
  // get(id: any): Observable<Product[]> {
  //   return this.http.get<Product[]>(`${baseUrl}/${id}`);
  // }
}
