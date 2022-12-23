import { Injectable } from '@angular/core';
import {CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AdminAuthenticationGuard implements CanActivate {
  constructor(private router : Router){

  }
  canActivate(): boolean
  {
    const userString=localStorage.getItem('userData');
    if(!userString) return false;
    
    const userData = JSON.parse(userString);
    if(userData.role == 'SuperAdmin')
    {
      return true;

    }
    else{
      this.router.navigate(['/']);
      return false;

    }}
}
