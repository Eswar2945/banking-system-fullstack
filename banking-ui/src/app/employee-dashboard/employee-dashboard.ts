import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
{FormsModule}
{CommonModule}
@Component({
  selector: 'app-employee-dashboard',
  standalone: true,
  templateUrl: './employee-dashboard.html',
  styleUrls: ['./employee-dashboard.css'],
  imports:[CommonModule, FormsModule]
})
export class EmployeeDashboard {

  constructor(private router: Router) {}

  go(path: string) {
    this.router.navigate([path]);
  }
}
