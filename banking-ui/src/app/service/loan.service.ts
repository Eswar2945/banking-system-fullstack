import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Loan {
  id?: number;
  customerId: number;
  accountId: number;
  loanAmount: number;
  interestRate: number;
  tenureMonths: number;
  status?: string;
  appliedDate?: string;
}

@Injectable({ providedIn: 'root' })
export class LoanService {
  private baseUrl = 'http://localhost:8084/loans';

  constructor(private http: HttpClient) {}

  create(l: Loan): Observable<Loan> {
    return this.http.post<Loan>(this.baseUrl, l);
  }

  getAll(): Observable<Loan[]> {
    return this.http.get<Loan[]>(this.baseUrl);
  }
}
