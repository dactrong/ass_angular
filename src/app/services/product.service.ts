import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../types/category';
import { Product, ProductCreate } from '../types/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // http sẽ cung cấp các phương thức dderv tương tác với api
  constructor(private http: HttpClient) {
  }
  // observable sẽ cung cấp sử lý bất đông bộ về phía component alwnsg nghe dữ liệu 
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.products);
  }
  getProduct(_id: string): Observable<Product> {
    return this.http.get<Product>(`${environment.products}/${_id}`)
  }
  deleteProduct(_id: string): Observable<any> {
    return this.http.delete(`${environment.products}/${_id}`);
  }
  createProduct(data: ProductCreate): Observable<Product> {
    return this.http.post<Product>(`${environment.products}`, data)
  }
  updateProduct(_id: string, data: ProductCreate): Observable<Product> {
    return this.http.put<Product>(`${environment.products}/${_id}`, data)
  }

}
  // ------------------------------------

