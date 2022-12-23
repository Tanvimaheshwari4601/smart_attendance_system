import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private router:Router){

  }
  canActivate(): boolean
  {
    const token=localStorage.getItem('isloggedin'); 
    if(token=='true')
    {
      return true;

    }
    else{
      this.router.navigate(['/login-user']);
      return false;

    }
    
  }
  
    
  
}
