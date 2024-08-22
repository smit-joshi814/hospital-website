import { Component, OnInit } from '@angular/core';
import { Appointment, Department, Doctor } from '../../data/appointment.model';
import { AppointmentService } from '../../services/appointment/appointment.service';
import { NgFor, NgIf } from '@angular/common';
import { DepartmentService } from '../../services/department/department.service';
import { DoctorService } from '../../services/doctor/doctor.service';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './appointment.component.html',
  styles: ``,
})
export class AppointmentComponent implements OnInit {
  appointments: Appointment[] = [];
  departments: Department[] = [];
  doctors: Doctor[] = [];

  constructor(
    private appointmentService: AppointmentService,
    private departmentService: DepartmentService,
    private doctorService: DoctorService
  ) {}

  ngOnInit(): void {
    this.loadAppointments();
    this.loadDepartments();
    this.loadDoctors();
  }

  loadAppointments() {
    this.appointmentService.getAppointments().subscribe(
      (appointments) => (this.appointments = appointments),
      (error) => console.error('error loading appointments', error)
    );
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

  // Get department name by ID
  getDepartmentName(departmentId: number): string {
    const department = this.departments.find(
      (dept) => dept.id === departmentId
    );
    return department ? department.name : 'Unknown';
  }

  // Get doctor name by ID
  getDoctorName(doctorId: number): string {
    const doctor = this.doctors.find((doc) => doc.id === doctorId);
    return doctor ? doctor.name : 'Unknown';
  }

  updateAppointment(appointment: Appointment, newStatus: boolean) {
    const updatedAppointment: Appointment = {
      id: appointment.id,
      name: appointment.name,
      email: appointment.email,
      phone: appointment.phone,
      date: appointment.date,
      message: appointment.message,
      department: appointment.department,
      doctor: appointment.doctor,
      status: newStatus,
    };

    this.appointmentService
      .updateAppointment(updatedAppointment)
      .subscribe(() => {
        this.loadAppointments();
      });
  }
}
