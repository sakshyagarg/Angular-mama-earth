import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  errorMessage: string = '';
  userForm = {
    email: '',
    password: '',
    confirmPassword: '',
  };
  constructor(private router: Router) {}

  ngOnInit(): void {}

  validate() {
    if (this.userForm.password === this.userForm.confirmPassword) {
      this.errorMessage = '';
    } else {
      this.errorMessage = 'Password and Confirm Password did not match';
    }
  }

  isValid() {
    return this.errorMessage === '';
  }

  register() {
    this.router.navigate(['/login']);
  }
}
