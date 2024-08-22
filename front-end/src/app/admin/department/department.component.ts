import { Component } from '@angular/core';
import { Department } from '../../data/appointment.model';
import { DepartmentService } from '../../services/department/department.service';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './department.component.html',
  styles: [],
})
export class DepartmentComponent {
  departments: Department[] = [];
  departmentForm: FormGroup;
  selectedDepartment: Department | null = null;

  constructor(private departmentService: DepartmentService) {
    this.departmentForm = new FormGroup({
      department: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.loadDepartments();
  }

  // Load all departments
  loadDepartments(): void {
    this.departmentService.getDepartments().subscribe(
      (data) => (this.departments = data),
      (error) => console.error('Error loading departments', error)
    );
  }

  // Add a new department
  addDepartment(): void {
    if (this.departmentForm.valid) {
      const newDepartment: Department = {
        id: 0,
        name: this.departmentForm.value.department,
      };
      this.departmentService.addDepartment(newDepartment).subscribe(
        (department) => {
          this.departments.push(department);
          this.departmentForm.reset();
        },
        (error) => console.error('Error adding department', error)
      );
    }
  }

  // Open the modal and populate the form with the selected department's data
  openEditModal(department: Department): void {
    this.selectedDepartment = department;
    this.departmentForm.patchValue({
      department: department.name,
    });
  }

  // Update an existing department
  updateDepartment(): void {
    if (this.selectedDepartment && this.departmentForm.valid) {
      const updatedDepartment: Department = {
        ...this.selectedDepartment,
        name: this.departmentForm.value.department,
      };
      this.departmentService.updateDepartment(updatedDepartment).subscribe(
        () => {
          this.loadDepartments();
          this.departmentForm.reset();
          this.selectedDepartment = null;
        },
        (error) => console.error('Error updating department', error)
      );
    }
  }

  // Delete a department
  deleteDepartment(id: number): void {
    this.departmentService.deleteDepartment(id).subscribe(
      () => (this.departments = this.departments.filter((d) => d.id !== id)),
      (error) => console.error('Error deleting department', error)
    );
  }
}
