import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  login(user: any) {
    localStorage.setItem('username', user.email);
    this.router.navigate(['']);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('username') != null;
  }

  logout() {
    localStorage.removeItem('username');
    this.router.navigate(['']);
  }
}
