import { Routes } from '@angular/router';

import { EmployeeComponent } from './employee/employee.component';
import { CustomerComponent } from './customer/customer.component';
import { AccountComponent } from './account/account.component';
import { LoanComponent } from './loan/loan.component';
import { TransactionComponent } from './transaction/transaction.component';

import { EmployeeLogin } from './employee-login/employee-login';
import { EmployeeDashboard } from './employee-dashboard/employee-dashboard';

export const routes: Routes = [
  { path: '', redirectTo: 'employee-login', pathMatch: 'full' },
  { path: '', redirectTo: 'customer-login', pathMatch: 'full' },
  

  { path: 'employee-login', component: EmployeeLogin },
  { path: 'employee-dashboard', component: EmployeeDashboard },
  { path: 'employees', component: EmployeeComponent },

  { path: 'customers', component: CustomerComponent },

  { path: 'accounts', component: AccountComponent },
  { path: 'loans', component: LoanComponent },
  { path: 'transactions', component: TransactionComponent }
];
