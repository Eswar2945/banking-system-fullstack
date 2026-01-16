import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Transaction {
  id?: number;
  fromAccount: string;
  toAccount: string;
  amount: number;
  type: string;
  status?: string;
  transactionDateTime?: string;
}

@Injectable({ providedIn: 'root' })
export class TransactionService {
  private baseUrl = 'http://localhost:8085/transactions';

  constructor(private http: HttpClient) {}

  create(t: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(this.baseUrl, t);
  }

  getAll(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.baseUrl);
  }
}
