import { Component, OnInit } from '@angular/core';
import { Appointment, Department, Doctor } from '../../data/appointment.model';
import { AppointmentService } from '../../services/appointment/appointment.service';
import { DepartmentService } from '../../services/department/department.service';
import { DoctorService } from '../../services/doctor/doctor.service';
import { catchError, Observable, of, BehaviorSubject } from 'rxjs';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [NgFor, NgIf, AsyncPipe],
  templateUrl: './appointment.component.html',
  styles: [],
})
export class AppointmentComponent implements OnInit {
  appointments$!: Observable<Appointment[]>;
  departments$!: Observable<Department[]>;
  doctors$!: Observable<Doctor[]>;

  private departmentsSubject = new BehaviorSubject<Department[]>([]);
  private doctorsSubject = new BehaviorSubject<Doctor[]>([]);

  constructor(
    private appointmentService: AppointmentService,
    private departmentService: DepartmentService,
    private doctorService: DoctorService
  ) {}

  ngOnInit() {
    this.appointments$ = this.loadAppointments();
    this.departments$ = this.loadDepartments();
    this.doctors$ = this.loadDoctors();

    // Subscribe to departments and doctors to store their values
    this.departments$.subscribe((departments) =>
      this.departmentsSubject.next(departments)
    );
    this.doctors$.subscribe((doctors) => this.doctorsSubject.next(doctors));
  }

  loadAppointments(): Observable<Appointment[]> {
    return this.appointmentService.getAppointments().pipe(
      catchError((error) => {
        console.error('Error loading appointments', error);
        return of([]); // Handle the error appropriately
      })
    );
  }

  loadDepartments(): Observable<Department[]> {
    return this.departmentService.getDepartments().pipe(
      catchError((error) => {
        console.error('Error loading departments', error);
        return of([]); // Handle the error appropriately
      })
    );
  }

  loadDoctors(): Observable<Doctor[]> {
    return this.doctorService.getDoctors().pipe(
      catchError((error) => {
        console.error('Error loading doctors', error);
        return of([]); // Handle the error appropriately
      })
    );
  }

  getDepartmentName(departmentId: number): string {
    const departments = this.departmentsSubject.getValue();
    const department = departments.find((dept) => dept.id === departmentId);
    return department ? department.name : 'Unknown';
  }

  getDoctorName(doctorId: number): string {
    const doctors = this.doctorsSubject.getValue();
    const doctor = doctors.find((doc) => doc.id === doctorId);
    return doctor ? doctor.name : 'Unknown';
  }

  updateAppointment(appointment: Appointment, newStatus: boolean): void {
    const updatedAppointment: Appointment = {
      ...appointment,
      status: newStatus,
    };

    this.appointmentService
      .updateAppointment(updatedAppointment)
      .pipe(
        catchError((error) => {
          console.error('Error updating appointment', error);
          return of(null); // Handle the error appropriately
        })
      )
      .subscribe(() => {
        this.appointments$ = this.loadAppointments(); // Reload appointments
      });
  }
}
