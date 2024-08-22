import { Component } from '@angular/core';
import { CustomSpinnerComponent } from '../../common/utility/custom-spinner/custom-spinner.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Appointment, Department, Doctor } from '../../data/appointment.model';
import { NgFor } from '@angular/common';
import { DepartmentService } from '../../services/department/department.service';
import { DoctorService } from '../../services/doctor/doctor.service';
import { AppointmentService } from '../../services/appointment/appointment.service';

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

  constructor(
    private fb: FormBuilder,
    private departmentService: DepartmentService,
    private doctorService: DoctorService,
    private appointmentService: AppointmentService
  ) {
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
    this.loadDepartments();
    this.loadDoctors();
  }

  // Load all departments
  loadDepartments(): void {
    this.departmentService.getDepartments().subscribe(
      (data) => (this.departments = data),
      (error) => console.error('Error loading departments', error)
    );
  }

  loadDoctors(): void {
    this.doctorService.getDoctors().subscribe(
      (data) => (this.doctors = data),
      (error) => console.error('Error loading doctors', error)
    );
  }

  onSubmit(): void {
    if (this.appointmentForm.valid) {
      const newAppointment: Appointment = {
        id: 0,
        name: this.appointmentForm.value.name,
        email: this.appointmentForm.value.email,
        message: this.appointmentForm.value.message,
        phone: this.appointmentForm.value.phone,
        date: this.appointmentForm.value.date,
        department: this.appointmentForm.value.department,
        doctor: this.appointmentForm.value.doctor,
      };
      this.appointmentService.addApointment(newAppointment).subscribe(
        (appointment) => {
          console.log('Appointment added successfully', appointment);
          this.appointmentForm.reset();
        },
        (error) => console.error('Error adding appointment', error)
      );
    }
  }
}
