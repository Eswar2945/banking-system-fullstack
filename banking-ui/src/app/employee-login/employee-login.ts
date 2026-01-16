import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-login.html',
  styleUrls: ['./employee-login.css']
})
export class EmployeeLogin {

  username = '';
  password = '';
  error = '';

  constructor(private router: Router) {}

  login() {

    // ADMIN LOGIN
    if (this.username === 'admin' && this.password === 'password') {
      this.router.navigate(['/employee-dashboard']);
      return;
    }

    this.error = 'Invalid Username or Password';
  }
}
