import { Component } from '@angular/core';
import { CustomSpinnerComponent } from '../../common/utility/custom-spinner/custom-spinner.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Department, Doctor } from '../../data/appointment.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [CustomSpinnerComponent, ReactiveFormsModule, NgFor],
  templateUrl: './appointment.component.html',
  styles: ``,
})
export class AppointmentComponent {
  appointmentForm: FormGroup;
  departments: Department[] = [];
  doctors: Doctor[] = [];

  constructor(private fb: FormBuilder) {
    this.appointmentForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      department: ['', Validators.required],
      doctor: ['', Validators.required],
      date: ['', Validators.required],
      message: [''],
    });
  }

  ngOnInit(): void {
    // Simulating fetching dynamic data
    this.departments = [
      { id: 1, name: 'Cardiac Clinic' },
      { id: 2, name: 'Neurology' },
      { id: 3, name: 'Dentistry' },
      { id: 4, name: 'Gastroenterology' },
    ];

    this.doctors = [
      { id: 1, name: 'Dr. Akther Hossain' },
      { id: 2, name: 'Dr. Dery Alex' },
      { id: 3, name: 'Dr. Jovis Karon' },
    ];
  }

  onSubmit(): void {
    if (this.appointmentForm.valid) {
      console.log('Form Data:', this.appointmentForm.value);

      // Here, you can send the form data to the server
      // Example: this.http.post('/api/appointments', this.appointmentForm.value).subscribe(...);
    }
  }
}