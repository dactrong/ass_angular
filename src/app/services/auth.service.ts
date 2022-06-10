import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TypeSignin, TypeSigninResponse } from '../types/auth';

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
}
