import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseURL="http://localhost:8080/product"

  constructor(private httpclient:HttpClient) { }
  
  getProductList():Observable<Product[]>{
    return this.httpclient.get<Product[]>(`${this.baseURL}`);
  }
 
  createProduct(product:Product): Observable<Object>{
    return this.httpclient.post(`${this.baseURL}`,product); 
  }
  
  getProductById(id: number): Observable<Product>{
    return this.httpclient.get<Product>(`${this.baseURL}/${id}`);
  }
  
  updateProduct(id: number, product: Product): Observable<Object>{
    return this.httpclient.put(`${this.baseURL}/${id}`, product);
  }
  
  deleteProduct(id: number): Observable<Object>{
    return this.httpclient.delete(`${this.baseURL}/${id}`);
  }

 
}
