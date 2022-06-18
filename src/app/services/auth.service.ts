import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private http: HttpClient) {}

  login(user: any) {
    return this.http.post(`http://localhost:9085/api/auth/login`,user)
    // localStorage.setItem('username', user.email);
    // this.router.navigate(['']);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('username') != null;
  }

  logout() {
    localStorage.removeItem('username');
    this.router.navigate(['']);
  }

  register(userForm: any) {
    return this.http.post(`http://localhost:9085/api/auth/register`,userForm);
  }
}
