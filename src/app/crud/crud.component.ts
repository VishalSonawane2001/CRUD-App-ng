import { Component } from '@angular/core';

import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Employee } from './crud.module';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-crud-table',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {
  employees: Employee[] = [];
  employeeForm: FormGroup;
  editing: boolean = false;
  editId: number | null = null;

  constructor(private fb: FormBuilder, ) {
    this.employeeForm = this.fb.group({
      id: [''],
      name: [''],
      email: [''],
      city: [''],
      mobile: ['']
    });
  }

  addOrUpdateEmployee() {
    if (this.editing) {
      const index = this.employees.findIndex(emp => emp.id === this.editId);
      if (index !== -1) {
        this.employees[index] = { id: this.editId!, ...this.employeeForm.value };
        this.editing = false;
        this.editId = null;
      }
    } else {
      const newEmployee: Employee = { ...this.employeeForm.value };
      this.employees.push(newEmployee);
    }
    this.employeeForm.reset();
  }

  editEmployee(employee: Employee) {
    this.editing = true;
    this.editId = employee.id;
    this.employeeForm.setValue({
      id: employee.id,
      name: employee.name,
      email: employee.email,
      city: employee.city,
      mobile: employee.mobile
    });
  }

  deleteEmployee(id: number) {
    this.employees = this.employees.filter(emp => emp.id !== id);
  }

  resetForm() {
    this.employeeForm.reset();
    this.editing = false;
    this.editId = null;
  }
}
