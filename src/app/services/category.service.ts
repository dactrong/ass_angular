import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category, CategoryCreate } from '../types/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }
  getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(environment.category);
  }
  getCategorys(_id: string): Observable<Category> {
    return this.http.get<Category>(`${environment.category}/${_id}`)
  }
  deleteCategory(_id: string): Observable<any> {
    return this.http.delete(`${environment.category}/${_id}`);
  }
  createCategory(data: CategoryCreate): Observable<Category> {
    return this.http.post<Category>(`${environment.category}`, data)
  }
  updateCategory(_id: string, data: CategoryCreate): Observable<Category> {
    return this.http.put<Category>(`${environment.category}/${_id}`, data)
  }
}