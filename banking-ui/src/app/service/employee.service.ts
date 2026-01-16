import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Employee {
  id?: number;
  name: string;
  email: string;
  password: string;
  role: string;
  salary: number;
  status?: string;
  joinedDate?: string;
}

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  private baseUrl = 'http://localhost:8083/employees';

  constructor(private http: HttpClient) {}

  create(e: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.baseUrl, e);
  }

  getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl);
  }

  delete(id: number): Observable<string> {
    return this.http.delete<string>(`${this.baseUrl}/${id}`);
  }
}
