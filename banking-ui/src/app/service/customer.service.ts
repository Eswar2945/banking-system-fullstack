import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Customer {
  id?: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  status?: string;
  createdDate?: string;
}

@Injectable({ providedIn: 'root' })
export class CustomerService {
  private baseUrl = 'http://localhost:8081/customers';

  constructor(private http: HttpClient) {}

  create(c: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.baseUrl, c);
  }

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseUrl);
  }
}
