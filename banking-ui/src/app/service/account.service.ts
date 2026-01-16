import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Account {
  id?: number;
  accountNumber: string;
  accountType: string;
  balance: number;
  customerId: number;
  status?: string;
  createdDate?: string;
}

@Injectable({ providedIn: 'root' })
export class AccountService {
  private baseUrl = 'http://localhost:8082/accounts';

  constructor(private http: HttpClient) {}

  create(a: Account): Observable<Account> {
    return this.http.post<Account>(this.baseUrl, a);
  }

  getAll(): Observable<Account[]> {
    return this.http.get<Account[]>(this.baseUrl);
  }

  delete(id: number): Observable<string> {
    return this.http.delete<string>(`${this.baseUrl}/${id}`);
  }
}
