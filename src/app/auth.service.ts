import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  public login() {
    localStorage.setItem('ACCESS_TOKEN',"access_token");
  }

  public isloggedin(){
    return localStorage.getItem('ACCESS_TOKEN')!==null;
  }

  public logout() {
    localStorage.removeItem('ACCESS_TOKEN');
  }
}