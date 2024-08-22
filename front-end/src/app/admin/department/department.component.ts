import { Component, OnInit } from '@angular/core';
import { Department } from '../../data/appointment.model';
import { DepartmentService } from '../../services/department/department.service';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { catchError, Observable, of, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf,AsyncPipe],
  templateUrl: './department.component.html',
  styles: [],
})
export class DepartmentComponent implements OnInit {
  private departmentsSubject = new BehaviorSubject<Department[]>([]);
  departments$: Observable<Department[]> = this.departmentsSubject.asObservable();
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
  loadDepartments() {
    this.departmentService.getDepartments().pipe(
      catchError((error) => {
        console.error('Error loading departments', error);
        return of([]); // Handle the error appropriately
      })
    ).subscribe(departments => this.departmentsSubject.next(departments));
  }

  // Add a new department
  addDepartment(): void {
    if (this.departmentForm.valid) {
      const newDepartment: Department = {
        id: 0,
        name: this.departmentForm.value.department,
      };

      this.departmentService.addDepartment(newDepartment).pipe(
        catchError((error) => {
          console.error('Error adding department', error);
          return of(null); // Handle the error appropriately
        })
      ).subscribe((department) => {
        if (department) {
          // Update the list of departments
          const departments = this.departmentsSubject.getValue();
          this.departmentsSubject.next([...departments, department]);
          this.departmentForm.reset();
        }
      });
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

      this.departmentService.updateDepartment(updatedDepartment).pipe(
        catchError((error) => {
          console.error('Error updating department', error);
          return of(null); // Handle the error appropriately
        })
      ).subscribe(() => {
        this.loadDepartments(); // Refresh the list of departments
        this.departmentForm.reset();
        this.selectedDepartment = null;
      });
    }
  }

  // Delete a department
  deleteDepartment(id: number): void {
    this.departmentService.deleteDepartment(id).pipe(
      catchError((error) => {
        console.error('Error deleting department', error);
        return of(null); // Handle the error appropriately
      })
    ).subscribe(() => {
      // Remove the deleted department from the list
      const departments = this.departmentsSubject.getValue();
      this.departmentsSubject.next(departments.filter((d) => d.id !== id));
    });
  }
}
