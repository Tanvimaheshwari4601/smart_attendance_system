import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDetailGuard implements CanActivate {
  constructor(private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(route);
      
      const userData = localStorage.getItem('userData');
      if (!userData) {
        return false;
      }
  
      const user =  JSON.parse(userData);
      console.log(user);
      
      if(user.role=='STUDENT')
      {
        if( user.id == route.params['id']) return true;
        else{
          this.router.navigate(['homepage/user-details', user.id]);
          return false;  
        } 
      }

      return true;
      
    
  }
  
}
