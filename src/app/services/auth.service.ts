import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TypeSignin, TypeSigninResponse, User, UserCreate } from '../types/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(data: TypeSignin): Observable<TypeSigninResponse> {
    return this.http.post<TypeSigninResponse>(`${environment.login}`, data);
  }
  getAuth(): Observable<User[]> {
    return this.http.get<User[]>(environment.user);
  }
  getUser(_id: string): Observable<User> {
    return this.http.get<User>(`${environment.products}/${_id}`)
  }
  deleteUser(_id: string): Observable<any> {
    return this.http.delete(`${environment.products}/${_id}`);
  }
  createUser(data: UserCreate): Observable<User> {
    return this.http.post<User>(`${environment.signup}`, data)
  }
  updateUser(_id: string, data: UserCreate): Observable<User> {
    return this.http.put<User>(`${environment.products}/${_id}`, data)
  }
}
