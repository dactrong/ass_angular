import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanAccessAdminGuard implements CanActivate {

  constructor(private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // lấy ra thông tin người dùng đã đăng nhập 
      const loggedInUser = JSON.parse (localStorage.getItem('loggedInUser')as string);

      // console.log(loggedInUser.user.role ==1);
      
   // kiểm  tra nếu có thì cho vào admin
    if(loggedInUser.user.role==1){
      return true
    }
    // nếu khômg thì quay về màn login
    this.router.navigateByUrl('/auth/signin')
    return false
  }
  
}
