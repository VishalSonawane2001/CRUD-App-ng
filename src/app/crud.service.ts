import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './crud/crud.module';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private apiUrl = 'http://localhost:3000/employees';
  constructor(private http: HttpClient) { }
  getEmployees() {
    return this.http.get<Employee[]>(this.apiUrl);
  }
  addEmployee(employee: Employee) {
    return this.http.post<Employee>(this.apiUrl, employee);
  }
  updtateEmployee(id: number, employee: any) {
    return this.http.put<Employee>(`${this.apiUrl}/${id}`, employee); 
  }
  
}
